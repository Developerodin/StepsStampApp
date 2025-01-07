import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const OTPInput = ({ length = 6, onChangeOTP }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRefs = useRef([]);

  const handleTextChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    onChangeOTP(newOtp.join(''));

    // Move focus to the next field
    if (text && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleFocus = (index) => {
    setFocusedIndex(index);
  };

  const handleBlur = () => {
    setFocusedIndex(-1);
  };

  return (
    <View style={styles.container}>
      {otp.map((value, index) => (
        <TextInput
          key={index}
          style={[
            styles.input,
            focusedIndex === index
              ? { borderBottomColor: '#F78300' } // Active border color
              : { borderBottomColor: '#ccc' }, // Inactive border color
          ]}
          keyboardType="numeric"
          maxLength={1}
          value={value}
          onChangeText={(text) => handleTextChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          ref={(ref) => (inputRefs.current[index] = ref)}
          onFocus={() => handleFocus(index)}
          onBlur={handleBlur}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  input: {
    width: 40,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    borderBottomWidth: 2,
    marginHorizontal: 8,
    color: '#fff',
  },
});

export default OTPInput;
