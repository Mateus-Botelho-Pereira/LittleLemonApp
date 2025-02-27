import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { fonts } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  avatar: {
    height: 64,
    width: 64,
    borderRadius: 32,
    marginBottom: 32,
  },
  header: {
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "ios" ? 60 : 25,
    paddingBottom: 16,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  body: {
    padding: 16,
  },
  inputGroup: {
    width: "100%",
    gap: 8,
    marginBottom: 32,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.karla.regular400,
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#495E57",
  },
  buttonGroup: {
    width: "100%",
    marginTop: 24,
    gap: 24,
  },
  button: {
    height: 48,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#F4CE14",
    borderWidth: 1,
    borderColor: "gray",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: fonts.karla.bold700,
  },
});
