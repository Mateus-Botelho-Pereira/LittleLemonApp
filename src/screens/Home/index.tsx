import React from "react";
import { styles } from "./styles";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import { MenuIcon } from "../../assets/menu-icon";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.5}>
          <MenuIcon />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Image
            style={styles.avatar}
            source={require("../../assets/profile.png")}
          />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Text style={styles.imageContainerTitle}>Little Lemon</Text>
          <Text style={styles.imageContainerSubTitle}>Chicago</Text>
          <Text style={styles.imageContainerDescription}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </Text>
          <TouchableOpacity
            style={styles.imageContainerButton}
            activeOpacity={0.5}
          >
            <Text style={styles.imageContainerButtonText}>Reserve a table</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dataSection}>
          <Text style={styles.carouselTitle}>ORDER FOR DELIVERY!</Text>
          <ScrollView
            style={styles.carouselContaier}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity style={styles.carouselButton} activeOpacity={0.5}>
              <Text style={styles.carouselButtonLabel}>Lunch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.carouselButton} activeOpacity={0.5}>
              <Text style={styles.carouselButtonLabel}>Mains</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.carouselButton} activeOpacity={0.5}>
              <Text style={styles.carouselButtonLabel}>Desserts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.carouselButton} activeOpacity={0.5}>
              <Text style={styles.carouselButtonLabel}>A La Carte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.carouselButton} activeOpacity={0.5}>
              <Text style={styles.carouselButtonLabel}>Specials</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.carouselButton} activeOpacity={0.5}>
              <Text style={styles.carouselButtonLabel}>Menus</Text>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.infoGroup}>
            <Text style={styles.infoTitle}>Greek Salad</Text>
            <Text style={styles.infoDescription}>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago{" "}
            </Text>
            <Text style={styles.infoPrice}>$12.99</Text>
          </View>
          <View style={styles.infoGroup}>
            <Text style={styles.infoTitle}>Brushetta</Text>
            <Text style={styles.infoDescription}>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic
            </Text>
            <Text style={styles.infoPrice}>$7.99</Text>
          </View>
          <View style={styles.infoGroup}>
            <Text style={styles.infoTitle}>Grilled Fish</Text>
            <Text style={styles.infoDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sed cursus.
            </Text>
            <Text style={styles.infoPrice}>$2.99</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
