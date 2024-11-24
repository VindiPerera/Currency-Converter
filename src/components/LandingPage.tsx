import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableWithoutFeedback, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  CurrencyConverter: undefined;
};

type LandingPageProps = {
  navigation: StackNavigationProp<RootStackParamList, "CurrencyConverter">;
};

const LandingPage: React.FC<LandingPageProps> = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: "https://i.pinimg.com/474x/fb/2f/31/fb2f318c3af845767243ce221686a655.jpg" }}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("CurrencyConverter")}>
          <Image
            source={{
              uri: "https://e7.pngegg.com/pngimages/49/34/png-clipart-tamindir-exchange-rate-currency-euro-united-states-dollar-others-text-trademark-thumbnail.png",
            }}
            style={styles.logo}
          />
        </TouchableWithoutFeedback>
        <Text style={styles.title}>Welcome to the App!</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dim overlay for better text visibility
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});

export default LandingPage;
