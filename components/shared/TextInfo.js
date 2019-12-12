import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TextInfo = ({ message }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textStyle}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    color: "#7e7e7e"
  }
});

export default TextInfo;
