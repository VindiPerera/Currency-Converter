import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Import vector icons
import { StackNavigationProp } from "@react-navigation/stack";
import axios from "axios";



type RootStackParamList = {
  Profile: undefined;
  Settings: undefined;
  CurrencyConverter: undefined;
};

type HomePageProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const HomePage: React.FC<HomePageProps> = ({ navigation }) => {
  const [currencyRates, setCurrencyRates] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Fetch live currency rates
  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        // Use the API to fetch currency rates
        const response = await axios.get(
          'https://api.exchangerate-api.com/v4/latest/USD'
        );
        setCurrencyRates(response.data.rates);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching currency rates: ", error);
        setLoading(false);
      }
    };

    fetchCurrencyRates();
  }, []);

  return (
    <View style={styles.container}>
      {/* Top Icons */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Icon name="person-circle" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Icon name="settings" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.Title}>Welcome!!</Text>
        {/* Currency Rates Widget */}
        <View style={styles.widget}>
          <Text style={styles.widgetTitle}>Live Currency Rates</Text>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <>
              {/* Display Rates with Flags */}
              <View style={styles.currencyRow}>
                <Text style={styles.currencyText}>USD → EUR 🇪🇺: {currencyRates?.EUR || 'Loading...'} </Text>
                <Text style={styles.currencyText}>USD → GBP 🇬🇧: {currencyRates?.GBP || 'Loading...'} </Text>
              </View>
              <View style={styles.currencyRow}>
                <Text style={styles.currencyText}>USD → JPY 🇯🇵: {currencyRates?.JPY || 'Loading...'} </Text>
                <Text style={styles.currencyText}>USD → CAD 🇨🇦: {currencyRates?.CAD || 'Loading...'} </Text>
              </View>
              <View style={styles.currencyRow}>
                <Text style={styles.currencyText}>USD → AUD 🇦🇺: {currencyRates?.AUD || 'Loading...'} </Text>
                <Text style={styles.currencyText}>USD → CHF 🇨🇭: {currencyRates?.CHF || 'Loading...'} </Text>
              </View>
            </>
          )}
        </View>

        {/* News Section */}
        <View style={styles.widget}>
          <Text style={styles.widgetTitle}>Finance News</Text>
          <Text style={styles.widgetContent}>
            - "Fed Raises Interest Rates Again"{'\n'}
            - "Crypto Market Sees 20% Surge"{'\n'}
            - "Stock Market Trends to Watch This Week"
          </Text>
        </View>

        {/* Tips and Tutorials */}
        <View style={styles.widget}>
          <Text style={styles.widgetTitle}>Tips & Tutorials</Text>
          <Text style={styles.widgetContent}>
            - "How to Use Currency Converter Efficiently"{'\n'}
            - "Understanding Forex Trends"{'\n'}
            - "Best Practices for International Transactions"
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#dcdcdc",
    marginTop: 40,
  },
  content: {
    padding: 20,
  },
  widget: {
    backgroundColor: "#f9f9f9",
    borderRadius: 50,
    padding: 20,
    marginBottom: 35,
    borderColor:"#bfecff",
    borderWidth:2,
    borderBlockColor:"#bfecff",
  },
  widgetTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign:"center",
  },
  widgetContent: {
    fontSize: 16,
    color: "#555",
    lineHeight: 20,
    textAlign:"center",
    marginBottom:30,
    
  },
  currencyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  currencyText: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
  },
  Title: {
    fontSize: 25,
    color: "#333",
    fontWeight:"bold",
    marginBottom:20,
  
  },

});

export default HomePage;
