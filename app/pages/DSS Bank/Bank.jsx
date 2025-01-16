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
import NextButton from "../../components/Button/NextButton";



const { width, height } = Dimensions.get("window");

export const Bank = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value of 0
  

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
            <Text style={{ color: "#fff", fontSize: 20 ,marginLeft: 15,fontFamily: "Lexend"}}>DSS Bank</Text>
            <View style={{ flex: 1 }} />
            
          </View>

            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 50  }}>
           <Image source={require("../../assets/images/Woman.png")} style={{ width: width * 0.9, height: height * 0.4  }} />
            </View>

            <View style={styles.cardBackgroundContainer}>
          <Image
            source={require("../../assets/images/SlidesBg.png")} // Ensure path is correct for the card background
            style={styles.cardBackgroundImage}
            resizeMode="contain"
          />

          {/* Centered section */}
          <View
            style={{
              position: "absolute",
              width: width * 0.9,
              // borderWidth: 1,
              // borderColor: '#fff',
              alignItems: "center",
              justifyContent: "center", // This centers the inner content vertically
              height: "100%", // Takes the height of the parent container
            }}
          >
            <View
              style={{
                // borderWidth: 1,
                // borderColor: '#fff',
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.title}>Become a Stakeholder in StepsStamp</Text>
              {/* <Text style={styles.title}>{activeSlide.title2}</Text> */}
              <Text style={[styles.description, { marginTop: 15 }]}>
              We understand that building your investment portfolio is important to you. Consider becoming a stockholder by stacking SSBs to help reach your financial goals.
              </Text>
            </View>
          </View>

         
        </View>

           <View   style={{
            position: "absolute",
            bottom: 95,
            
            left: 0,
            right: 0,
            alignItems: "center",
            justifyContent: "center",
          }}>
            <NextButton  />
           </View>

         
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
  image: {
    width: 320,
    height: 280,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    fontFamily: "Lexend",
    color: "#ffff",
    textAlign: "center",
    letterSpacing: 1,
  },
  description: {
    fontWeight: "300",
    fontSize: 11,
    textAlign: "center",
    color: "#FFFFFF",
    paddingHorizontal: 24,
    lineHeight: 20,
    letterSpacing: 1,
    fontFamily: "Lexend",
  },
  cardBackgroundContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 120,
    width: "100%",
    height: height * 0.33,
    // borderWidth:1,
    // borderColor:'#ffff'
    
  },
  cardBackgroundImage: {
    height: height * 0.33, // Dynamic height
    width: width * 0.95, // Dynamic width
    resizeMode: "contain", // Ensure proper scaling
    // borderWidth:1,
    // borderColor:'red'
  },
 
});

export default Bank;