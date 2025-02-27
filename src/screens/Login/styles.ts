import { StyleSheet } from "react-native";
import { fonts } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  inputGroup: {
    width: "100%",
    gap: 8,
    marginBottom: 32,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.karla.extraBold800,
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#F4CE14",
  },
  buttonGroup: {
    width: "100%",
    marginTop: 40,
    gap: 24,
  },
  button: {
    height: 48,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    backgroundColor: "#F4CE14",
  },
});
