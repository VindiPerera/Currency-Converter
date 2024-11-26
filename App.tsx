import React,{useContext} from "react";
import { NavigationContainer, ThemeContext, useNavigationState } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./src/components/LandingPage";
import CurrencyConverter from "./src/components/CurrencyConverter";
import Home from "./src/components/Home";
import NavigationBar from "./src/components/NavigationBar";
import Settings from "./src/components/Settings";
import Profile from "./src/components/Profile";
import { ThemeProvider} from "./src/context/ThemeContext";




const Stack = createNativeStackNavigator();

const AppNavigator = () => {

  const routeName = useNavigationState((state) => {

    if (state && state.routes && state.routes[state.index]) {
      return state.routes[state.index].name;
    }
    return null; 
  });

  return (
    <>
      <Stack.Navigator initialRouteName="LandingPage"
       >
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="CurrencyConverter"
          component={CurrencyConverter}
          options={{ headerShown: false }} 
        />
         <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false }} 
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

      
      {(routeName === "Home" || routeName === "CurrencyConverter" || routeName === "Settings"|| routeName === "Profile") && <NavigationBar />}
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    </ThemeProvider>
  
  );
};

export default App;