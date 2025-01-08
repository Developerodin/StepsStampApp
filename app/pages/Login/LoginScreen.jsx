import React, { useEffect, useRef ,useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Animated, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');

export const LoginScreen = () => {
    const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value of 0
    const [isFocused, setIsFocused] = useState(false);

    const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
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
          {/* Logo */}
          <Image
            source={require('../../assets/icons/logo2.png')} // Replace with your logo path
            style={styles.logo}
          />

          {/* Title */}
          <Text style={styles.title}>Welcome, User</Text>
                       <Text style={[styles.title, { marginBottom: 0 }]}>Let's get started</Text>
                       


          {/* Input Field */}
          <Text style={{color: '#3A3D46',
    fontSize: 12,marginVertical: 10}}>Using <Text style={{color: "#fff",textDecorationLine: "underline"}}>hello@kijihub.com</Text> to login</Text>
          <Text style={styles.inputLabel}>YOUR PASSWORD</Text>
          <View style={[styles.inputContainer, { borderBottomColor: isFocused ? '#F78300' : '#ccc' }]}>
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
          <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={{color: '#35ABFF',alignSelf: 'flex-end',marginBottom: 20,fontSize: 15}}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Continue Button */}
          <TouchableOpacity style={styles.primaryButton} >
            
            <Text style={styles.primaryButtonText}>LOGIN</Text>
          </TouchableOpacity>

          {/* Social Buttons */}
          <TouchableOpacity style={styles.secondaryButton}>
            <FontAwesome name="facebook" size={20} color="#fff" />
            <Text style={styles.secondaryButtonText}>Sign Up With Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <FontAwesome name="google" size={20} color="#fff" />
            <Text style={styles.secondaryButtonText}>Sign Up With Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Ionicons name="call" size={20} color="#fff" />
            <Text style={styles.secondaryButtonText}>Sign Up With Phone</Text>
          </TouchableOpacity>

          {/* Divider */}
          
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
    marginLeft: 10,
  },
  logo: {
    width: 50,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 20,
    
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 0,
    textAlign: 'left',
  },
  inputLabel: {
    color: '#3A3D46',
    fontSize: 10,
    marginBottom: 5,
    alignSelf: 'flex-start',
    marginTop: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
    padding: 10,
    fontWeight: '600',
  },
  clearIcon: {
    marginLeft: 10,
  },
 primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2e65ff',
    paddingVertical: 12,
    borderRadius: 40,
    justifyContent: 'center',
    marginBottom: 20,
    width: width * 0.75,
    alignSelf: 'center', 
    marginTop: 10,
  },
  buttonIcon: {
    marginRight: 10,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 12,
    borderRadius: 40,
    width: width * 0.75,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderColor: '#1877F2',
    borderWidth: 1,
  },
  secondaryButtonText: {
    color: '#B3CEE2',
    marginLeft: 10,
    fontSize: 12,
  },
  orText: {
    color: '#3A3D46',
    marginVertical: 15,
    fontSize: 14,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  metamaskButton: {
    
    paddingVertical: 15,
    borderRadius: 10,
    width: width * 0.75,
    alignItems: 'center',
    alignSelf: 'center',
  },
  metamaskIcon: {
    width: 310,
    height: 45,
    resizeMode: 'contain',
  },
});

export default LoginScreen;
