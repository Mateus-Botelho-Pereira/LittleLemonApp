import React from "react";
import { useFonts } from "expo-font";
import {
  MarkaziText_500Medium,
  MarkaziText_400Regular,
} from "@expo-google-fonts/markazi-text";
import {
  Karla_800ExtraBold,
  Karla_700Bold,
  Karla_500Medium,
  Karla_400Regular,
} from "@expo-google-fonts/karla";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    MarkaziText_500Medium,
    MarkaziText_400Regular,
    Karla_800ExtraBold,
    Karla_700Bold,
    Karla_500Medium,
    Karla_400Regular,
  });

  return <>{fontsLoaded && <Routes />}</>;
}
