import { Text, View } from "react-native";
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
import WelcomeScreen from "./pages/onboarding/splashScreen/WelcomeScreen";
import * as SplashScreen from "expo-splash-screen";
import { Profile } from "./pages/profile/Profile";
import { AppProvider } from "./context/AppContext";
import { AppSlides } from "./pages/onboarding/appSlides/AppSlides";
import { SignInScreen } from "./pages/SignIn/SignInScreen";
import { Login } from "./pages/SignIn/Login";
import { NewUser } from "./pages/Registration/NewUser";
import { Calender } from "./pages/Registration/Calender";
import { Guide } from "./pages/onboarding/Guide/Guide";
import { ChooseBlockChain } from "./pages/BlockChain/ChooseBlockChain";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = ({ navigation }) => {
 
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: ThemeData.color,
        tabBarInactiveTintColor: ThemeData.activeColor,
        // tabBarLabelStyle: { color: "#fff" },
        tabBarStyle: {
          backgroundColor: ThemeData.backgroundColor,
          
          position: "absolute",
          bottom: 0,
          paddingTop: 10,
          paddingBottom: 10,
          height: 64,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" size={size} color={color} />
            // <Image
            //   source={require('./assets/media/home_1.png')} 
            //   style={{ width: 25, height: 25, tintColor: color }}
            // />
          ),
          headerShown: true,
        }}
      />
   
   <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" size={size} color={color} />
          ),
          headerShown: true,
        }}
      />





   
      

      
   
    </Tab.Navigator>
  );
};
export default function Index() {
  console.log("hii from index");
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

  if (!appIsReady) {
    return <WelcomeScreen />;
  }

  return (
    <AppProvider>

    
    <NavigationIndependentTree>
    <NavigationContainer onLayout={onLayoutRootView}>
      <Stack.Navigator
          initialRouteName={
            "Guide"
          //  Auth ? "Tabs" : "Login"
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

        </Stack.Navigator>

        

      
    </NavigationContainer>
    </NavigationIndependentTree>
    </AppProvider>
  );
}
