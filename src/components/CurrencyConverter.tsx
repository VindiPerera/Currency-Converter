import React, { useState, useEffect, useContext } from "react";
import { View, Text, TextInput, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { ThemeContext } from "../context/ThemeContext"; 

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [openBase, setOpenBase] = useState(false);
  const [openTarget, setOpenTarget] = useState(false);
  const [loading, setLoading] = useState(false); 

  const currencies = [
    { label: "🇺🇸 USD", value: "USD" },
    { label: "🇪🇺 EUR", value: "EUR" },
    { label: "🇬🇧 GBP", value: "GBP" },
    { label: "🇯🇵 JPY", value: "JPY" },
    { label: "🇦🇺 AUD", value: "AUD" },
    { label: "🇨🇦 CAD", value: "CAD" },
    { label: "🇨🇭 CHF", value: "CHF" },
    { label: "🇮🇳 INR", value: "INR" },
    { label: "🇨🇳 CNY", value: "CNY" },
    { label: "🇲🇽 MXN", value: "MXN" },
    { label: "🇧🇷 BRL", value: "BRL" },
    { label: "🇿🇦 ZAR", value: "ZAR" },
  ];

  const widgetContents = [
    { text: "Convert Your Currency", subtext: "Check live foreign exchange rates", color: "#bfecff" },
    { text: "Stay Updated!", subtext: "Get real-time currency updates here", color: "#ffe7a3" },
    { text: "Fast and Accurate", subtext: "Reliable conversion rates you can trust", color: "#d4f5d4" },
  ];
  const [widgetIndex, setWidgetIndex] = useState(0);

  // Rotate widget content and color
  useEffect(() => {
    const interval = setInterval(() => {
      setWidgetIndex((prevIndex) => (prevIndex + 1) % widgetContents.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  const handleConvert = async () => {
    if (!amount || isNaN(Number(amount))) {
      alert("Please enter a valid number.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://api.exchangerate.host/live?access_key=3dfecff0b7fc4519b1ec3411c661c08e&base=${baseCurrency}&symbols=${targetCurrency}`
      );
      const data = await response.json();

      if (!data.success) {
        alert(`Error: ${data.error.info}`);
        setLoading(false);
        return;
      }

      const rate = data.quotes && data.quotes[`${baseCurrency}${targetCurrency}`];

      if (rate) {
        setConvertedAmount((parseFloat(amount) * rate).toFixed(2));
      } else {
        alert("Error fetching exchange rate.");
      }
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
      alert("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };


  const { styles: themeStyles, isDarkMode } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: themeStyles.backgroundColor }]}>
      <View style={[styles.header, { backgroundColor: themeStyles.backgroundColor }]}>
      <Text style={[styles.Text1, { color: themeStyles.textColor }]}>Currency Converter</Text>
      </View>
  
      <View style={[styles.card, { backgroundColor: widgetContents[widgetIndex].color }]}>
        <Text style={[styles.cardText, { color: themeStyles.textColor }]}>{widgetContents[widgetIndex].text}</Text>
        <Text style={[styles.cardSubtext, { color: themeStyles.textColor }]}>{widgetContents[widgetIndex].subtext}</Text>

        
        <View style={styles.dotsContainer}>
          {widgetContents.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, widgetIndex === index && styles.activeDot]} // Highlight active dot
            />
          ))}
        </View>
      </View>

      <Text style={[styles.buttonText, { color: themeStyles.textColor }]}>Enter Amount:</Text>
      <TextInput
        style={[styles.input]}
        placeholder="e.g., 100"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Text style={[styles.buttonText, { color: themeStyles.textColor }]}>Base Currency:</Text>
      <DropDownPicker
        open={openBase}
        value={baseCurrency}
        items={currencies}
        setOpen={setOpenBase}
        setValue={setBaseCurrency}
        onOpen={() => setOpenTarget(false)} 
        style={[styles.dropdown]}
        zIndex={3000} 
        zIndexInverse={1000}
      />

      <Text style={[styles.buttonText, { color: themeStyles.textColor }]}>Target Currency:</Text>
      <DropDownPicker
        open={openTarget}
        value={targetCurrency}
        items={currencies}
        setOpen={setOpenTarget}
        setValue={setTargetCurrency}
        onOpen={() => setOpenBase(false)} 
        style={[styles.dropdown]}
        zIndex={2000} 
        zIndexInverse={4000}
      />

      <TouchableOpacity style={styles.customButton} onPress={handleConvert}>
        <Text style={[styles.buttonT, { color: themeStyles.textColor }]}>Convert</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color={themeStyles.linkColor} style={styles.loader} />
      ) : (
        convertedAmount && (
          <Text style={[styles.result, { color: themeStyles.textColor }]}>
            Converted Amount: {convertedAmount} {targetCurrency}
          </Text>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    padding:10,
    borderBottomWidth: 1,
    borderBottomColor: "#dcdcdc",
    marginTop: 40,
    marginBottom:15,
  },
  card: {

    backgroundColor: "#bfecff", 
    height:120,
    marginBottom: 30,
    marginTop:10,
    borderRadius: 50,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  
  },
  Text1:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  content: {
    padding: 6,
  },
  cardSubtext: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
    marginBottom:10,
  },
  cardText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333", 
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#333",
  },
  Text: {
    fontSize: 12,
    
    color: "#333", 
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  dropdown: {
    marginBottom: 20,
  },
  result: {
    marginTop: 40,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  customButton: {
    backgroundColor: "#bfecff", 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
  },
  buttonText: {
    color: "black", 
    fontSize: 16,
    fontWeight: "bold",
    marginBottom:10,
  },
  buttonT: {
    color: "black", 
    fontSize: 18,
    fontWeight: "bold",
  },
  loader: {
    marginTop: 20,
  },
});

export default CurrencyConverter;
