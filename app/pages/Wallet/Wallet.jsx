import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import USDT from "../../assets/icons/SSB2.png";
import SSB from "../../assets/icons/SSB.png";
import Blockchain from "../../assets/icons/SSB3.png";



const { width, height } = Dimensions.get("window");

export const Wallet = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value of 0
  const [activeTab, setActiveTab] = useState("Walk Mode");

  const handleSignIn = () => {
    navigation.navigate("SignIn");
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Final opacity value of 1
      duration: 2000, // Duration of 2 seconds
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="#181A20" style="light" />

      <View style={styles.topLeftGradient}>
        <Image
          source={require("../../assets/images/GradientTopLeft.png")}
          style={styles.gradientImage}
        />
      </View>

      <View style={styles.content}>
        <Animated.View style={{ opacity: fadeAnim, flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 30,
              paddingHorizontal: 30,
            }}
          >
            <Image
              source={require("../../assets/icons/menu.png")}
              style={{ width: 25, height: 25 }}
            />
            <Text style={{ color: "#fff", fontSize: 20 ,marginLeft: 15,fontFamily: "Lexend"}}>My Wallet</Text>
            <View style={{ flex: 1 }} />
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../assets/icons/WatchIcon.png")}
                style={{ width: 28, height: 28,  }}
              />
            </View>
          </View>
          <ScrollView style={{ flex: 1, marginBottom: 60 }}>

            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 40,  }}>
           <Image source={require("../../assets/images/Circle.png")} style={{ width: width * 0.9, height: height * 0.4, resizeMode: "contain",  }} />
            </View>

            <View style={styles.card}>
        <Image
          source={USDT} // Replace with your icon URL
          style={styles.icon}
        />
        <View style={styles.cardContent}>
          <Text style={styles.title}>USDT</Text>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>$100.00</Text>
            <Text style={styles.subText}>100.00</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={SSB} // Replace with your icon URL
          style={styles.icon}
        />
        <View style={styles.cardContent}>
          <Text style={styles.title}>SSB</Text>
          <View style={styles.amountContainer}>
            <Text style={[styles.amount,{color:"#9CB5F5"}]}>$100.00</Text>
            <Text style={styles.subText}>100.00</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={Blockchain} // Replace with your icon URL
          style={styles.icon}
        />
        <View style={styles.cardContent}>
          <Text style={styles.title}>Blockchain</Text>
          <View style={styles.amountContainer}>
            <Text style={[styles.amount,{color:"#EA70FF"}]}>$100.00</Text>
            <Text style={styles.subText}>2 Blockchains</Text>
          </View>
        </View>
      </View>
      </ScrollView>

         
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: "#181A20",
  },
  topLeftGradient: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  bottomRightGradient: {
    position: "absolute",
    top: 150,
    right: -25,
  },
  gradientImage: {
    resizeMode: "contain",
    opacity: 0.2,
  },
  content: {
    flex: 1,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#262A34", // Card background color
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 20,
    marginHorizontal: 20,
   
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginRight: 12,
    backgroundColor: "#2a2a3b",
  },
  cardContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  title: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Lexend",
  },
  amountContainer: {
    alignItems: "flex-end",
  },
  amount: {
    color: "#A5F59C", // Green color for the amount
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Lexend",
  },
  subText: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
  },
  
});

export default Wallet;