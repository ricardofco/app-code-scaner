import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import CONSTANTS_COLORS from "../../settings/app.constants.colors";

const ScannedBook = ({ item, onPress }) => {
  return (
    <View style={styles.mainContainer}>
      <Input
        placeholder="Codigo de libro..."
        value={item}
        inputStyle={{ padding: 10 }}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        leftIcon={
          <Icon
            name="book"
            size={24}
            color={CONSTANTS_COLORS.PURPLE}
            type="font-awesome"
          />
        }
      />
      <Button
        onPress={onPress}
        containerStyle={styles.buttonContainerStyle}
        buttonStyle={styles.buttonStyle}
        icon={
          <Icon
            raised
            reverse
            name="trash"
            type="evilicon"
            size={12}
            color={CONSTANTS_COLORS.DANGER}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    borderColor: "#f2f2f2",
    borderWidth: 1,
    marginVertical: 5,
    justifyContent: "center"
  },
  buttonContainerStyle: {
    position: "absolute",
    right: 40,
    bottom: 10
  },
  buttonStyle: {
    borderRadius: 100,
    height: 25,
    width: 25,
    backgroundColor: "transparent"
  }
});
export default ScannedBook;
