import React, { useState, useEffect } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State for Dark Mode

  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);

  // Define light and dark themes
  const lightTheme = {
    backgroundColor: '#f4f4f4',
    cardBackground: '#fff',
    textColor: '#000',
    linkColor: 'blue',
  };

  const darkTheme = {
    backgroundColor: '#121212',
    cardBackground: '#333',
    textColor: '#fff',
    linkColor: '#1e90ff',
  };

  // Choose theme based on dark mode
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      {/* Account Card */}
      <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
        <TouchableOpacity onPress={() => alert('Account section clicked')}>
          <Text style={[styles.sectionTitle, { color: theme.textColor }]}>Account</Text>
        </TouchableOpacity>
      </View>

      {/* Dark Mode Card */}
      <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
        <View style={styles.row}>
          <Text style={[styles.sectionTitle, { color: theme.textColor }]}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleDarkMode}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
      </View>

      {/* Help Card */}
      <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
        <TouchableOpacity onPress={() => alert('Help section clicked')}>
          <Text style={[styles.sectionTitle, { color: theme.textColor }]}>Help</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // For Android shadow
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Ensures the Switch aligns vertically centered with the text
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Settings;
