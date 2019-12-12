import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const ModalRow = ({ property, value, iconName, iconType }) => {
  return (
    <View style={styles.views}>
      <Icon name={iconName} type={iconType} size={20} color="#4c4c4c" />
      <Text style={styles.text}>
        {property}: {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "left",
    marginLeft: 20
  },
  views: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 25
  }
});

ModalRow.propTypes = {
  iconType: PropTypes.string,
  value: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  property: PropTypes.string.isRequired
};
ModalRow.defaultProps = {
  iconType: "antdesign"
};
export default ModalRow;
