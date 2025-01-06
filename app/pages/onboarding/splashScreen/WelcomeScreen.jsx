import React, { useEffect, useRef } from 'react';
import { Animated, View, Image, StyleSheet, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
const { width, height } = Dimensions.get('window');
import Logo from "../../../assets/icons/logo1.png";
import Logo2 from "../../../assets/icons/logo2.png";

export const WelcomeScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value of 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Final opacity value of 1
      duration: 3000, // Duration of 3 seconds
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", flex: 1 }}>
      <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Animated.Image
          source={Logo2}
          style={{ ...styles.logo, opacity: fadeAnim }}
        />
        <Animated.Image
          source={Logo}
          style={{ ...styles.logo, opacity: fadeAnim }}
        />
      </View>
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: "#000000",
  },
  logo: {
    resizeMode: 'contain',
  },
});

export default WelcomeScreen;