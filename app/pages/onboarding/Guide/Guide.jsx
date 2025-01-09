import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export const Guide = () => {
  const navigation = useNavigation();
  const handelBack = () => {
    navigation.goBack();
  };

  const handelSign = () => {
    navigation.navigate("Login");
  };
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value of 0
  const [isFocused, setIsFocused] = useState(false);

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

      {/* Background Gradient Images */}
      <View style={styles.topLeftGradient}>
        <Image
          source={require("../../../assets/images/GradientTopLeft.png")}
          style={styles.gradientImage}
        />
      </View>
      <View style={styles.bottomRightGradient}>
        <Image
          source={require('../../../assets/images/GradientCenter.png')}
          style={{width: 93, height: 93, resizeMode: 'contain', opacity: 0.4}}
        />
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Animated.View style={{ opacity: fadeAnim }}>
          {/* Logo */}
          <View style={{ marginLeft: 30 }}>
            <TouchableOpacity onPress={handelBack}>
              <Image
                source={require("../../../assets/icons/leftIcon.png")} // Replace with your logo path
                style={styles.logo}
              />
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.title}>StepsStamp</Text>
            <Text style={[styles.title, { marginBottom: 0 }]}>
              A Guide to Our Plan
            </Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <Image
              source={require("../../../assets/images/Guide.png")} // Replace with your logo path
              style={{ width: width * 1, height: height * 0.4, marginHorizontal: 0 }}
            />
          </View>
          <View style={{ marginTop: 60 }}>
            <Text style={styles.centerText}>
              Invest your earned tokens in blockchain-powered{" "}
            </Text>
            <Text style={styles.centerText}>
              assets. Watch your rewards grow with healthy,{" "}
            </Text>
            <Text style={styles.centerText}>
              sustainable returns while you stay motivated and
            </Text>
            <Text style={styles.centerText}>active.</Text>
          </View>

          <View style={{ marginTop: 45 }}>
            <TouchableOpacity style={styles.metamaskButton} onPress={handelSign} activeOpacity={0.8}>
              <Image
                source={require("../../../assets/icons/LetGet.png")} // Replace with your Metamask logo path
                style={styles.metamaskIcon}
              />
            </TouchableOpacity>
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
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",

    marginLeft: 5,
  },
  logo: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 0,
    textAlign: "left",
    letterSpacing: 1.5,
    
  },
  centerText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    lineSpacing: 1,  
    alignSelf: "center",
  },
  metamaskButton: {
    paddingVertical: 15,
    borderRadius: 10,
    width: width * 0.75,
    alignItems: "center",
    alignSelf: "center",
  },
  metamaskIcon: {
    width: 310,
    height: 45,
    resizeMode: "contain",
  },
});

export default Guide;
