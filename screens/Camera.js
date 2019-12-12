import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { showMessage } from 'react-native-flash-message';
import { withNavigation } from 'react-navigation';
import CONSTANTS_COLORS from '../settings/app.constants.colors';
import RBSheet from 'react-native-raw-bottom-sheet';
import ModalDetails from '../components/shared/ModalDetails';
import { DoubleCircleLoader } from 'react-native-indicator';
import Client from '../client/Client';

class Camera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      scanned: false,
      barCode: '',
      details: {},
      loadingDetail: false
    };
    this.client = new Client();
  }

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  openBottomAction = async code => {
    this.setState({ loadingDetail: true });
    this.RBSheet.open(code);
    const response = await this.client.getProducto(code);
    this.setState({
      ...this.state,
      details: response.data,
      loadingDetail: false
    });
  };

  scanAgain = () => {
    setTimeout(() => {
      this.RBSheet.close();
    }, 350);
    this.setState({
      scanned: false
    });
  };
  render() {
    const { hasCameraPermission, scanned, loadingDetail, details } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Solicitud para permisos de camara</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>Sin acceso a la camara</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          backgroundColor: '#000'
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          duration={300}
          animationType={'fade'}
          closeOnDragDown
          onClose={() => this.setState({ scanned: false })}
          customStyles={{
            container: styles.rbsheetStyle
          }}
        >
          {loadingDetail ? (
            <View style={styles.center}>
              <DoubleCircleLoader color={CONSTANTS_COLORS.BLUE} />
            </View>
          ) : (
            <>
              <ModalDetails data={details} />
              <Button
                buttonStyle={{ backgroundColor: CONSTANTS_COLORS.DANGER }}
                containerStyle={styles.button}
                title='Escanear nuevo'
                onPress={this.scanAgain}
              />
            </>
          )}
        </RBSheet>
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    this.setState({
      barCode: data
    });
    this.openBottomAction(data);
  };
}
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rbsheetStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingBottom: 60
  },
  button: {
    position: 'absolute',
    width: '100%',
    bottom: 0
  }
});

export default withNavigation(Camera);
