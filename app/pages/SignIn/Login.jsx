import React, { useEffect, useRef ,useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Animated, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import OTPInput from '../../components/OTP/OTPInput';

const { width, height } = Dimensions.get('window');

export const Login = () => {
    const navigation = useNavigation();
    const handelBack = () => {
    navigation.goBack();
};
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value of 0
    const [isFocused, setIsFocused] = useState(false);

    const [otp, setOtp] = useState('');

    const handelVerify = () => {
        navigation.navigate('NewUser');
    };

    const handleOTPChange = (otpValue) => {
      setOtp(otpValue);
      console.log('OTP entered:', otpValue);
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
          <TouchableOpacity   onPress={handelBack}>
          <Image
            source={require('../../assets/icons/leftIcon.png')} // Replace with your logo path
            style={styles.logo}
          
          />
            </TouchableOpacity>

          {/* Title */}
          <Text style={[styles.title ,{marginTop : 5}]}>Please </Text>
                       <Text style={[styles.title, { marginBottom: 0 }]}>confirm your</Text>
                       <Text style={[styles.title, { marginBottom: 10 }]}>identity</Text>


          {/* Input Field */}
          <Text style={styles.inputLabel}>We have sent you an OTP to</Text>
          <Text style={[styles.inputLabel ,{ marginBottom: 50 }]}>you email <Text style={{color: "#fff"}}>theodin@theodin.in</Text></Text>
          <View style={styles.inputContainer}>
          <OTPInput length={6} onChangeOTP={handleOTPChange} />
          
          </View>

          <Text style={styles.resendText}>
        Don’t receive the OTP? <Text style={styles.resendLink}>Resend OTP</Text>
      </Text>
          <TouchableOpacity style={styles.primaryButton} onPress={handelVerify}>
           
            <Text style={styles.primaryButtonText}>VERIFY</Text>
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
    marginLeft: 5,
  },
  logo: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginBottom: 20,
    
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 0,
    textAlign: 'left',
    letterSpacing: 1.5,
  },
  inputLabel: {
    color: '#3A3D46',
    fontSize: 14,
    marginBottom: 0,
    alignSelf: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
 
    marginBottom: 0,
    width: '100%',
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
    padding: 10,
    fontWeight: '600',
  },
  resendText: {
    marginTop: 0,
    textAlign: 'flex-start',
    color: '#3A3D46',
    marginLeft: 10,
  },
  resendLink: {
    color: '#35ABFF',
    fontWeight: 'bold',
  },
 primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2e65ff',
    paddingVertical: 15,
    borderRadius: 40,
    justifyContent: 'center',
    marginBottom: 20,
    width: width * 0.75,
    alignSelf: 'center', 
    marginTop: 30,
  },
  buttonIcon: {
    marginRight: 10,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
 
});

export default Login;
