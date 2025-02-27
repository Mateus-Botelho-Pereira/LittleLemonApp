import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { fonts } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  header: {
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "ios" ? 60 : 25,
    paddingBottom: 16,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  imageContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    backgroundColor: "#495E57",
  },
  imageContainerTitle: {
    fontSize: 64,
    lineHeight: 64,
    fontFamily: fonts.markaziText.medium500,
    color: "#F4CE14",
  },
  imageContainerSubTitle: {
    fontSize: 40,
    lineHeight: 40,
    marginBottom: 24,
    fontFamily: fonts.markaziText.regular400,
    color: "white",
  },
  imageContainerDescription: {
    width: "65%",
    fontSize: 18,
    lineHeight: 18,
    marginBottom: 48,
    fontFamily: fonts.karla.medium500,
    color: "white",
  },
  imageContainerButton: {
    height: 36,
    width: 148,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    backgroundColor: "#F4CE14",
  },
  imageContainerButtonText: {
    fontSize: 16,
    fontFamily: fonts.karla.bold700,
  },
  dataSection: {
    padding: 16,
    paddingBottom: 32,
  },
  carouselTitle: {
    marginBottom: 12,
    fontSize: 20,
    fontFamily: fonts.karla.extraBold800,
  },
  carouselContaier: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 24,
  },
  carouselButton: {
    padding: 12,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    backgroundColor: "#EDEFEE",
  },
  carouselButtonLabel: {
    fontSize: 16,
    fontFamily: fonts.karla.extraBold800,
  },
  infoGroup: {
    paddingVertical: 12,
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#EDEFEE",
  },
  infoTitle: {
    fontSize: 18,
    fontFamily: fonts.karla.bold700,
  },
  infoDescription: {
    fontSize: 16,
    fontFamily: fonts.karla.regular400,
  },
  infoPrice: {
    fontSize: 18,
    fontFamily: fonts.karla.medium500,
  },
});
