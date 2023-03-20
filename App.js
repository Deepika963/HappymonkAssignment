import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import MyImagePicker from "./MyImagePicker";
import MyMap from "./MyMap.js";
const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ImagePicker" component={MyImagePicker} />
        <Stack.Screen name="Map" component={MyMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
