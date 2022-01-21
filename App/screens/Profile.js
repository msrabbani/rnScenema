import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Profile = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>INI Profile</Text>
    </View>
  );
};

export default Profile;

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
