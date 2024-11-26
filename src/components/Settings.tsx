import React, { useContext } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const Settings = () => {
  const { isDarkMode, toggleTheme, styles: themeStyles } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: themeStyles.backgroundColor }]}>
      
      <View style={[styles.header, { backgroundColor: themeStyles.backgroundColor }]}>
      <Text style={[styles.Text1, { color: themeStyles.textColor }]}>Setting</Text>
      </View>
      <View style={[styles.card, { backgroundColor: themeStyles.cardBackground }]}>
        <TouchableOpacity onPress={() => alert('Account section clicked')}>
          <Text style={[styles.sectionTitle, { color: themeStyles.textColor }]}>Account</Text>
        </TouchableOpacity>
      </View>

   
      <View style={[styles.card, { backgroundColor: themeStyles.cardBackground }]}>
        <View style={styles.row}>
          <Text style={[styles.sectionTitle, { color: themeStyles.textColor }]}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
      </View>

   
      <View style={[styles.card, { backgroundColor: themeStyles.cardBackground }]}>
        <TouchableOpacity onPress={() => alert('Help section clicked')}>
          <Text style={[styles.sectionTitle, { color: themeStyles.textColor }]}>Help</Text>
        </TouchableOpacity>
      </View>
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
  Text1:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  card: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Settings;
