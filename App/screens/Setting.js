import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Setting = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>INI Setting</Text>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
