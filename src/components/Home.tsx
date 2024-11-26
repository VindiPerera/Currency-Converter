import React, { useEffect, useState, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Import vector icons
import { StackNavigationProp } from "@react-navigation/stack";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext

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

  // Use the ThemeContext to access current theme
  const { styles: themeStyles, isDarkMode } = useContext(ThemeContext); // Access the theme

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
    <View style={[styles.container, { backgroundColor: themeStyles.backgroundColor }]}>
      {/* Top Icons */}
      <View style={[styles.header, { backgroundColor: themeStyles.backgroundColor }]}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Icon name="person-circle" size={30} color={themeStyles.textColor} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Icon name="settings" size={30} color={themeStyles.textColor} />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.Title, { color: themeStyles.textColor }]}>Welcome!!</Text>

        {/* Currency Rates Widget */}
        <View style={[styles.widget, { backgroundColor: themeStyles.cardBackground, borderColor: themeStyles.linkColor }]}>
          <Text style={[styles.widgetTitle, { color: themeStyles.textColor }]}>Live Currency Rates</Text>
          {loading ? (
            <ActivityIndicator size="large" color={themeStyles.linkColor} />
          ) : (
            <>
              {/* Display Rates with Flags */}
              <View style={styles.currencyRow}>
                <Text style={[styles.currencyText, { color: themeStyles.textColor }]}>USD → EUR 🇪🇺: {currencyRates?.EUR || 'Loading...'} </Text>
                <Text style={[styles.currencyText, { color: themeStyles.textColor }]}>USD → GBP 🇬🇧: {currencyRates?.GBP || 'Loading...'} </Text>
              </View>
              <View style={styles.currencyRow}>
                <Text style={[styles.currencyText, { color: themeStyles.textColor }]}>USD → JPY 🇯🇵: {currencyRates?.JPY || 'Loading...'} </Text>
                <Text style={[styles.currencyText, { color: themeStyles.textColor }]}>USD → CAD 🇨🇦: {currencyRates?.CAD || 'Loading...'} </Text>
              </View>
              <View style={styles.currencyRow}>
                <Text style={[styles.currencyText, { color: themeStyles.textColor }]}>USD → AUD 🇦🇺: {currencyRates?.AUD || 'Loading...'} </Text>
                <Text style={[styles.currencyText, { color: themeStyles.textColor }]}>USD → CHF 🇨🇭: {currencyRates?.CHF || 'Loading...'} </Text>
              </View>
            </>
          )}
        </View>

        {/* News Section */}
        <View style={[styles.widget, { backgroundColor: themeStyles.cardBackground, borderColor: themeStyles.linkColor }]}>
          <Text style={[styles.widgetTitle, { color: themeStyles.textColor }]}>Finance News</Text>
          <Text style={[styles.widgetContent, { color: themeStyles.textColor }]}>
            - "Fed Raises Interest Rates Again"{'\n'}
            - "Crypto Market Sees 20% Surge"{'\n'}
            - "Stock Market Trends to Watch This Week"
          </Text>
        </View>

        {/* Tips and Tutorials */}
        <View style={[styles.widget, { backgroundColor: themeStyles.cardBackground, borderColor: themeStyles.linkColor }]}>
          <Text style={[styles.widgetTitle, { color: themeStyles.textColor }]}>Tips & Tutorials</Text>
          <Text style={[styles.widgetContent, { color: themeStyles.textColor }]}>
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
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#dcdcdc",
    marginTop: 40,
  },
  content: {
    padding: 20,
  },
  widget: {
    borderRadius: 50,
    padding: 20,
    marginBottom: 35,
    borderWidth: 2,
  },
  widgetTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  widgetContent: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
    marginBottom: 30,
  },
  currencyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  currencyText: {
    fontSize: 16,
    lineHeight: 22,
  },
  Title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default HomePage;
