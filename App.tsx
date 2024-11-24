import React from "react";
import { NavigationContainer, useNavigationState } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./src/components/LandingPage";
import CurrencyConverter from "./src/components/CurrencyConverter";
import Home from "./src/components/Home";
import NavigationBar from "./src/components/NavigationBar";
import Settings from "./src/components/Settings";
import Profile from "./src/components/Profile";




const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  // Get the current route name
  const routeName = useNavigationState((state) => {
    // Check if state and its routes are defined
    if (state && state.routes && state.routes[state.index]) {
      return state.routes[state.index].name;
    }
    return null; // Return null or a default route name if undefined
  });

  return (
    <>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }} // Hide the navigation bar on LandingPage
        />
        <Stack.Screen
          name="CurrencyConverter"
          component={CurrencyConverter}
          options={{ title:"" }} 
        />
         <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ title:"Settings" }} 
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title:"Profile" }} 
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false}} 
        />
      </Stack.Navigator>

      {/* Show NavigationBar */}
      {(routeName === "Home" || routeName === "CurrencyConverter" || routeName === "Settings"|| routeName === "Profile") && <NavigationBar />}
    </>
  );
};

const App = () => {
  return (
   
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  
  );
};

export default App;