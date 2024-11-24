import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons"; // Install if not already done

type RootStackParamList = {
  Home: undefined;
  CurrencyConverter: undefined;
  // Add other routes here if needed
};

const NavigationBar: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Home")}
      >
        <Ionicons name="home-outline" size={24} color="#007BFF" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("CurrencyConverter")}
      >
        <Ionicons name="cash-outline" size={24} color="#007BFF" />
        <Text style={styles.navText}>Currency</Text>
      </TouchableOpacity>

      {/* Add more navigation items here if needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    
    zIndex: 50,
    width: "100%",
    height: 64,
    transform: [{ translateX: "-50%" }],
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 9999,
    bottom: 16,
    left: "50%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
    
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  navText: {
    fontSize: 12,
    color: "#007BFF",
    marginTop: 4,
  },
});

export default NavigationBar;
