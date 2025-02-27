import React from "react";
import { styles } from "./styles";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Image resizeMode="center" source={require("../../assets/logo.png")} />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Insert name"
          keyboardType="default"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Insert email"
          keyboardType="default"
        />
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.label}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.label}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
