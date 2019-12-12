import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import PropTypes from "prop-types";
import CONSTANTS_COLORS from "../../settings/app.constants.colors";

const FixedAlert = ({ message, iconName }) => {
  return (
    <View style={styles.mainContainer}>
      <Icon name={iconName} type="AntDesign" size={20} color="#fff" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: CONSTANTS_COLORS.DANGER,
    borderRadius: 5,
    justifyContent: "space-around",
    padding: 10
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff"
  }
});

FixedAlert.propTypes = {
  iconName: PropTypes.string,
  message: PropTypes.string.isRequired
};
FixedAlert.defaultProps = {
  iconName: "warning"
};

export default FixedAlert;
