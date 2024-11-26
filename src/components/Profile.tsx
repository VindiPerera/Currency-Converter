import React,{useContext} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ThemeContext } from "../context/ThemeContext"; // Import the custom hook

const Profile: React.FC = () => {
    // Access theme styles from context
    const { styles: themeStyles, isDarkMode } = useContext(ThemeContext);

 

  return (
    <View style={[styles.container,  { backgroundColor: themeStyles.backgroundColor }]}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://www.w3schools.com/w3images/avatar2.png",
          }}
          style={styles.avatar}
        />
        <Text style={[styles.name, { color: themeStyles.textColor }]}>
          Namindu Perera
        </Text>
        <Text style={[styles.bio, { color: themeStyles.textColor }]}>
          Software Engineer | DevOps Enthusiast
        </Text>
      </View>

      {/* Profile Info */}
      <View
        style={[
          styles.infoContainer,
          { backgroundColor: themeStyles.backgroundColor },
        ]}
      >
        <View style={styles.infoRow}>
          <Icon name="mail-outline" size={20} color={themeStyles.iconColor} />
          <Text style={[styles.infoText, { color: themeStyles.textColor }]}>
            vop56@.com
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="call-outline" size={20} color={themeStyles.iconColor} />
          <Text style={[styles.infoText, { color: themeStyles.textColor }]}>
            +94 77 123 4567
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="location-outline" size={20} color={themeStyles.iconColor} />
          <Text style={[styles.infoText, { color: themeStyles.textColor }]}>
            Sri Lanka
          </Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: themeStyles.buttonBackground },
          ]}
        >
          <Icon name="create-outline" size={20} color={themeStyles.buttonTextColor} />
          <Text
            style={[styles.buttonText, { color: themeStyles.buttonTextColor }]}
          >
            Edit Profile
          </Text>
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
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  bio: {
    fontSize: 16,
    marginTop: 5,
    textAlign: "center",
  },
  infoContainer: {
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 30,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 10,
  },
  actions: {
    alignItems: "flex-start",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 20,
    backgroundColor:"#bfecff",
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Profile;
