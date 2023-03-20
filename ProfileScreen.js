import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
const ProfileScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is {route.params.name}'s profile</Text>
      <Text>My email id is {route.params.email}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ProfileScreen;
