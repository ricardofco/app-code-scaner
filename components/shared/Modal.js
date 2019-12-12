import React from "react";
import { Overlay } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import CONSTANTS_COLORS from "../../settings/app.constants.colors";
import { LinesLoader } from "react-native-indicator";

const Modal = ({ message }) => {
  return (
    <Overlay
      isVisible
      windowBackgroundColor="rgba(0, 0, 0, .5)"
      overlayBackgroundColor="#fff"
      width="auto"
      height="auto"
      borderRadius={0}
      onBackdropPress={() => this.setState({ isVisible: false })}
    >
      <View style={styles.stepContainerStyle}>
        <Text style={styles.step}>{message}</Text>
        <LinesLoader color={CONSTANTS_COLORS.PRIMARY_DARK_COLOR} />
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  stepContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: 230,
    height: 150
  },
  step: {
    marginBottom: 20,
    fontSize: 17,
    fontWeight: "400"
  }
});

export default Modal;