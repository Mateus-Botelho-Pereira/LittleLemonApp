import React from "react";
import { styles } from "./styles";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowBackIcon } from "../../assets/arrow-back-icon";

export function Profile() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ArrowBackIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Image
          style={styles.avatar}
          source={require("../../assets/profile.png")}
        />
        <View style={styles.inputGroup}>
          <Text style={styles.label}>First name</Text>
          <TextInput
            style={styles.input}
            placeholder="Insert firt name"
            keyboardType="default"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Last name</Text>
          <TextInput
            style={styles.input}
            placeholder="Insert last name"
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
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone number</Text>
          <TextInput
            style={styles.input}
            placeholder="Insert number"
            keyboardType="default"
          />
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={() => {
              navigation.popToTop();
            }}
          >
            <Text style={styles.buttonText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
