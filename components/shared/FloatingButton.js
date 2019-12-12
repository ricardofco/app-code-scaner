import React from "react";
import { StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
import CONSTANTS_COLORS from "../../settings/app.constants.colors";
import PropTypes from "prop-types";

const FloatingButton = ({ disabled, iconName, onPress }) => {
  return (
    <Button
      onPress={onPress}
      containerStyle={styles.buttonContainer}
      buttonStyle={styles.buttonStyle}
      disabled={disabled}
      icon={
        <Icon
          raised
          reverse
          name={iconName}
          type="evilicon"
          size={28}
          color={CONSTANTS_COLORS.PRIMARY_DARK_COLOR}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    /* position: "absolute",
    right: 10,
    bottom: 20, */
    elevation: 100
  },
  buttonStyle: {
    borderRadius: 100,
    height: 50,
    width: 50
  }
});

FloatingButton.propTypes = {
  iconName: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired
};

FloatingButton.defaultProps = {
  iconName: "camera",
  disabled: false
};

export default FloatingButton;
