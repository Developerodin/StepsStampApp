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

export const NewUser = () => {
  const navigation = useNavigation();
  const handelBack = () => {
    navigation.goBack();
  };

  const handelSign = () => {
    navigation.navigate('Calender');
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
          source={require("../../assets/images/GradientTopLeft.png")}
          style={styles.gradientImage}
        />
      </View>
      {/* <View style={styles.bottomRightGradient}>
        <Image
          source={require('../../assets/images/GradientBottomRight.png')}
          style={styles.gradientImage}
        />
      </View> */}

      {/* Main Content */}
      <View style={styles.content}>
        <Animated.View style={{ opacity: fadeAnim }}>
          {/* Logo */}
          <TouchableOpacity onPress={handelBack}>
            <Image
              source={require("../../assets/icons/leftIcon.png")} // Replace with your logo path
              style={styles.logo}
            />
          </TouchableOpacity>

          {/* Title */}
          <Text style={styles.title}>New user?</Text>
          <Text style={[styles.title, { marginBottom: 0 }]}>Sign Up</Text>

          <View style={{ marginTop: 30 }}>

          <Text style={styles.inputLabel}>FULL NAME</Text>
          <View
            style={[
              styles.inputContainer,
              { borderBottomColor: isFocused ? "#F78300" : "#ccc" },
            ]}
          >
            <TextInput
              style={styles.input}
              placeholder="YOUR EMAIL"
              placeholderTextColor="#ccc"
              defaultValue="The Odin"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <Ionicons
              name="close-circle"
              size={20}
              color="#3A3D46"
              style={styles.clearIcon}
            />
          </View>

          <Text style={styles.inputLabel}>YOUR USERNAME</Text>
          <View
            style={[
              styles.inputContainer,
              { borderBottomColor: isFocused ? "#F78300" : "#ccc" },
            ]}
          >
            <TextInput
              style={styles.input}
              placeholder="YOUR EMAIL"
              placeholderTextColor="#ccc"
              defaultValue="Username"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <Ionicons
              name="person-circle"
              size={20}
              color="#3A3D46"
              style={styles.clearIcon}
            />
          </View>

          <Text style={styles.inputLabel}>YOUR PASSWORD</Text>
          <View
            style={[
              styles.inputContainer,
              { borderBottomColor: isFocused ? "#F78300" : "#ccc" },
            ]}
          >
            <TextInput
              style={styles.input}
              placeholder="YOUR EMAIL"
              placeholderTextColor="#ccc"
              defaultValue="hello@TheOdin.in"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <Ionicons
              name="eye"
              size={20}
              color="#3A3D46"
              style={styles.clearIcon}
            />
          </View>
          </View>

          <TouchableOpacity style={styles.primaryButton} onPress={handelSign}>
            <Text style={styles.primaryButtonText}>SIGN UP</Text>
          </TouchableOpacity>
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
    bottom: -150,
    right: -100,
  },
  gradientImage: {
    resizeMode: "contain",
    opacity: 0.2,
  },
  content: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginLeft: 5,
  },
  logo: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 0,
    textAlign: "left",
  },
  inputLabel: {
    color: "#3A3D46",
    fontSize: 12,
    marginBottom: 0,
    alignSelf: "flex-start",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
  },
  input: {
    flex: 1,
    color: "#3A3D46",
    fontSize: 14,
    padding: 10,
    fontWeight: "600",
  },
  resendText: {
    marginTop: 0,
    textAlign: "flex-start",
    color: "#3A3D46",
    marginLeft: 10,
  },
  resendLink: {
    color: "#35ABFF",
    fontWeight: "bold",
  },
  primaryButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2e65ff",
    paddingVertical: 15,
    borderRadius: 40,
    justifyContent: "center",
    marginBottom: 20,
    width: width * 0.75,
    alignSelf: "center",
    marginTop: 30,
  },
  buttonIcon: {
    marginRight: 10,
  },
  primaryButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default NewUser;
