import React, { useEffect, useRef ,useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Animated, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');

export const SignInScreen = () => {
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
          <Image
            source={require('../../assets/icons/logo2.png')} // Replace with your logo path
            style={styles.logo}
          />

          {/* Title */}
          <Text style={styles.title}>What’s your </Text>
                       <Text style={[styles.title, { marginBottom: 0 }]}>email</Text>
                       <Text style={[styles.title, { marginBottom: 30 }]}>address?</Text>


          {/* Input Field */}
          <Text style={styles.inputLabel}>YOUR EMAIL</Text>
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
              name="close-circle"
              size={20}
              color="#3A3D46"
              style={styles.clearIcon}
            />
          </View>

          {/* Continue Button */}
          <TouchableOpacity style={styles.primaryButton} onPress={handleSignIn}>
            <Ionicons name="mail" size={20} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.primaryButtonText}>CONTINUE WITH EMAIL</Text>
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
          <Text style={styles.orText}>or</Text>

          {/* Metamask Button */}
          <View style={{marginTop: 5}}>
          <TouchableOpacity style={styles.metamaskButton}>
            <Image
              source={require('../../assets/icons/metamask-logo.png')} // Replace with your Metamask logo path
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
    backgroundColor: '#181A20',
  },
  topLeftGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bottomRightGradient: {
    position: 'absolute',
    bottom: -150,
    right: -100,
  },
  gradientImage: {
    
    resizeMode: 'contain',
    opacity: 0.2,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginLeft: 5,
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

export default SignInScreen;
