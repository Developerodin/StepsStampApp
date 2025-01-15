import { Text, View ,Image } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  NavigationContainer,
  useFocusEffect,
  useNavigation,
  NavigationIndependentTree 
} from "@react-navigation/native";
import { ThemeData } from "./theme/Theme";
import { Home } from "./pages/home/Home";
import { Wallet }from "./pages/Wallet/Wallet";
import { Rewards } from "./pages/Rewards & Referrals/Rewards";
import { Bank } from "./pages/DSS Bank/Bank";
import WelcomeScreen from "./pages/onboarding/splashScreen/WelcomeScreen";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Profile } from "./pages/profile/Profile";
import { AppProvider } from "./context/AppContext";
import { AppSlides } from "./pages/onboarding/appSlides/AppSlides";
import { SignInScreen } from "./pages/SignIn/SignInScreen";
import { Login } from "./pages/SignIn/Login";
import { NewUser } from "./pages/Registration/NewUser";
import { Calender } from "./pages/Registration/Calender";
import { Guide } from "./pages/onboarding/Guide/Guide";
import { ChooseBlockChain } from "./pages/BlockChain/ChooseBlockChain";
import {LoginScreen} from "./pages/Login/LoginScreen";
import {ForgotPassword} from "./pages/Login/ForgotPassword";
import {OTPVerify }from "./pages/Login/OTPVerify";
import {ChangePassword} from "./pages/Login/ChangePassword";
import { Home2 } from "./pages/home/Home2";
import {DSSBank} from "./pages/DSS Bank/DSSBank";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = ({ navigation }) => {
 
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#F78300",
        tabBarInactiveTintColor: "#BCBEC1",
        tabBarLabelStyle: { fontSize: 12, fontFamily: "Lexend",fontWeight: "600" },
        tabBarStyle: {
          backgroundColor: ThemeData.backgroundColor,
          
          position: "absolute",
          bottom: 0,
          paddingTop: 5,
          paddingBottom: 20,
          height: 75,
          borderTopColor: "#000",
          borderTopWidth: 0,
         
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            
            <Image
              source={require('./assets/icons/Home.png')} 
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
          headerShown: false,
        }}
      />
   
   <Tab.Screen
        name="DSS Bank"
        component={Bank}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/icons/BankTab.png')} 
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
          headerShown: false,
        }}
      />
       <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/icons/WalletTab.png')} 
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
          headerShown: false,
        }}
      />
       <Tab.Screen
        name="Reward"
        component={Rewards}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/icons/RewardTab.png')} 
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
          headerShown: false,
        }}
      />
       <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
            source={require('./assets/icons/ProfileTab.png')} 
            style={{ width: 24, height: 24, tintColor: color }}
          />
          ),
          headerShown: false,
        }}
      />





   
      

      
   
    </Tab.Navigator>
  );
};
export default function Index() {
  console.log("hii from index");
  const [fontsLoaded, fontError] = Font.useFonts({
    "Lexend": require("./assets/fonts/Lexend-Regular.ttf"),
  });

  const [Auth, setAuth] = useState(null);
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);
  const [appIsReady, setAppIsReady] = useState(false);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        // await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    const checkAuthAndFirstLaunch = async () => {
      try {
        // Check authentication status
        const authStatus = (await AsyncStorage.getItem("Auth")) || null;
        setAuth(authStatus === "true");

        // Check if app is launched for the first time
        const appData =
          (await AsyncStorage.getItem("isAppFirstLaunched")) || null;
        if (appData === null) {
          setIsAppFirstLaunched(true);
          await AsyncStorage.setItem("isAppFirstLaunched", "false");
        } else {
          setIsAppFirstLaunched(false);
        }
      } catch (err) {
        console.log("Error while checking Auth and First Launch:", err);
      }
    };

    checkAuthAndFirstLaunch();
  }, []);

  if (!appIsReady && !fontsLoaded) {
    return <WelcomeScreen />;
  }

  return (
    <AppProvider>

    
    <NavigationIndependentTree>
    <NavigationContainer onLayout={onLayoutRootView}>
      <Stack.Navigator
          initialRouteName={
            "AppSlides"
          //  Auth ? "Tabs" : "AppSlides"
          }
        >
       <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{
              headerShown: false,
            }}
          />

<Stack.Screen
            name="AppSlides"
            component={AppSlides}
            options={{
              headerShown: false,
            }}
          />

<Stack.Screen
            name="Graph Componnet"
            component={Home2}
            options={{
              headerShown: true,
            }}
          />
<Stack.Screen
            name="Login"
            component={SignInScreen}
            options={{
              headerShown: false,
            }}
          />
<Stack.Screen
            name="SignIn"
            component={Login}
            options={{
              headerShown: false,
            }}
          />

<Stack.Screen
            name="NewUser"
            component={NewUser}
            options={{
              headerShown: false,
            }}
          />
<Stack.Screen
            name="Calender"
            component={Calender}
            options={{
              headerShown: false,
            }}
          />
<Stack.Screen
            name="Guide"
            component={Guide}
            options={{
              headerShown: false,
            }}
          />
<Stack.Screen
            name="ChooseBlockChain"
            component={ChooseBlockChain}
            options={{
              headerShown: false,
            }}
          />
<Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
<Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{
              headerShown: false,
            }}
          />
<Stack.Screen
            name="OTPVerify"
            component={OTPVerify}
            options={{
              headerShown: false,
            }}
          />
<Stack.Screen
            name="ChangePassword"
            component={ChangePassword}
            options={{
              headerShown: false,
            }}
          />
         {/* <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          /> */}

<Stack.Screen
            name="DSS-Bank"
            component={DSSBank}
            options={{
              headerShown: false,
             
            }}
          />
           

        </Stack.Navigator>

        

      
    </NavigationContainer>
    </NavigationIndependentTree>
    </AppProvider>
  );
}
