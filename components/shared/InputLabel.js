import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Icon } from "react-native-elements";
import PropTypes from "prop-types";

const InputLabel = ({
  keyboardType,
  value,
  label,
  disabled,
  placeholder,
  onChangeText,
  iconName,
  maxLength
}) => {
  return (
    <View style={{ marginVertical: 10 }}>
      <Input
        keyboardType={keyboardType}
        value={value}
        label={label}
        disabled={disabled}
        maxLength={maxLength}
        placeholder={placeholder}
        inputStyle={styles.inputStyle}
        containerStyle={styles.inputContainerStyle}
        onChangeText={onChangeText}
        leftIcon={<Icon name={iconName} size={15} color="black" type="font-awesome" />}
        style={{ marginTop: 100 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainerStyle: {
    marginVertical: 10
  },
  inputStyle: {
    padding: 10,
    paddingLeft: 15
  }
});

InputLabel.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string
};
InputLabel.defaultProps = {
  value: "",
  disabled: false,
  keyboardType: "default"
};

export default InputLabel;
