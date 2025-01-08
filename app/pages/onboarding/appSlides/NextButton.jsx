import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
  Animated,
} from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import React, { useEffect, useRef } from "react";

export const NextButton = ({ percentage, scrollTo }) => {
  const size = 59;
  const strokeWidth = 2.5;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = (toValue) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(
      (value) => {
        const strokeDashoffset =
          circumference - (circumference * value.value) / 100;
        if (progressRef?.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [percentage]
    );

    return () => {
      progressAnimation.removeAllListeners();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke="#4b3e8e"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            ref={progressRef}
            stroke="#F78300"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>
      <TouchableOpacity activeOpacity={1} style={styles.button} onPress={scrollTo}>
        <AntDesign name="arrowright" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    justifyContent: "center",
    alignItems: "center",
    
    
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    position: "absolute",
    backgroundColor: "#4b3e8e",
    borderRadius: 100,
    
    width:56,
    height:56,
    flexDirection:"row",justifyContent: "center",alignItems: "center"
  },
});

export default NextButton;
