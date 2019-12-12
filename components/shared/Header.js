import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import CONSTANTS_COLORS from '../../settings/app.constants.colors';
import { withNavigation } from 'react-navigation';

import PropTypes from 'prop-types';

const Header = ({ navigation, headerTitle, buttonTitle, press, backgroundColor, textAlign }) => (
  <View style={[styles.mainContainer, { backgroundColor: backgroundColor }]}>
    <View style={styles.topSpace}>
      <Button
        onPress={() => navigation.goBack()}
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.buttonStyle}
        icon={
          <Icon
            name='arrow-back'
            type='ionicons'
            color={CONSTANTS_COLORS.HEADER_TITLE_COLOR}
            iconStyle={{ fontWeight: CONSTANTS_COLORS.HEADER_FONT_WEIGHT }}
          />
        }
      />
      <Text style={[styles.title, { textAlign }]}>{headerTitle}</Text>
      {press != undefined ? (
        <Button
          title={buttonTitle}
          onPress={press}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.buttonStyle}
        />
      ) : (
        <Button containerStyle={styles.buttonContainer} buttonStyle={styles.buttonStyle} />
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: CONSTANTS_COLORS.BORDER,
  },
  topSpace: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex'
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    color: CONSTANTS_COLORS.HEADER_TITLE_COLOR,
    fontWeight: CONSTANTS_COLORS.HEADER_FONT_WEIGHT,
    fontSize: CONSTANTS_COLORS.HEADER_FONT_SIZE,
    flex: 5
  },
  buttonStyle: {
    backgroundColor: 'transparent'
  }
});
Header.propTypes = {
  press: PropTypes.func,
  backgroundColor: PropTypes.string,
  headerTitle: PropTypes.string.isRequired
};
Header.defaultProps = {
  backgroundColor: CONSTANTS_COLORS.PRIMARY_COLOR,
  textAlign: 'left'
};
export default withNavigation(Header);
