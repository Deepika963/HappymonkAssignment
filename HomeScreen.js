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
import ProfileScreen from "./ProfileScreen";
import MyImagePicker from "./MyImagePicker";
import MyMap from "./MyMap.js";

const MyButton = ({ navigation }) => {
  const [buttonText, setButtonText] = useState("Click me");

  const handleClick = () => {
    setButtonText("Clicked!");
  };

  const data = [
    { text: "Item 1" },
    { text: "Item 2" },
    { text: "Item 3" },
    { text: "Item 4" },
    { text: "Item 5" },
  ];

  const renderList = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.text}</Text>
    </View>
  );

  const [city, setCity] = useState("Get Weather");

  const getWeather = async (city) => {
    const apiKey = "483a7a28add70d4faae1729dd0ae00a7";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const temperature = data.main.temp;
      console.log(`Temperature in ${city}: ${temperature}°C`); //check console
      setCity(temperature);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePress = () => {
    getWeather("Mumbai"); //enter the city here
  };

  const generatePassword = (length, complexity) => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*_-+=";
    let charset = lowercase;

    if (complexity === "medium") {
      charset = charset + uppercase + numbers;
    } else if (complexity === "high") {
      charset = charset + uppercase + numbers + symbols;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password = password + charset[randomIndex];
    }

    return password;
  };
  const [passwordText, setPassword] = useState("Generate Password");
  const getPassword = () => {
    const password = generatePassword(10, "high");
    console.log(password);
    setPassword(password);
  };

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>

      <Text style={styles.buttonTextStyle}>List of items</Text>
      <FlatList data={data} renderItem={renderList} />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{city}</Text>
      </TouchableOpacity>

      <Button
        title="Go to profile"
        onPress={() =>
          navigation.navigate("Profile", {
            name: "Jane",
            email: "jane@gmail.com",
          })
        }
      />

      <Button
        title="Go to Image Picker"
        onPress={() => navigation.navigate("ImagePicker")}
      />

      <Button title="Go to Maps" onPress={() => navigation.navigate("Map")} />

      <TouchableOpacity style={styles.button} onPress={getPassword}>
        <Text style={styles.buttonText}>{passwordText}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "dodgerblue",
    padding: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  item: {
    backgroundColor: "skyblue",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 13,
  },
  buttonTextStyle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});

export default MyButton;
