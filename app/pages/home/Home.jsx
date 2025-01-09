import React, { useEffect, useRef ,useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Animated, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');

export const Home = () => {
    const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value of 0
    const [isFocused, setIsFocused] = useState(false);

    const handleSignIn = () => {
    navigation.navigate('SignIn');
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

      {/* Background Gradient Images */}
      <View style={styles.topLeftGradient}>
        <Image
          source={require('../../assets/images/GradientTopLeft.png')}
          style={styles.gradientImage}
        />
      </View>
       <View style={styles.bottomRightGradient}>
              <Image
                source={require('../../assets/images/GradientCenter.png')}
                style={{width: 93, height: 93, resizeMode: 'contain', opacity: 0.4}}
              />
            </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Welcome to Home</Text>

        
          
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
    backgroundColor: '#181A20',
  },
  topLeftGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bottomRightGradient: {
    position: "absolute",
    top: 150,
    right: -25,
    
  },
  gradientImage: {
    
    resizeMode: 'contain',
    opacity: 0.2,
  },
  content: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginLeft: 0,
  },
  
});

export default Home;