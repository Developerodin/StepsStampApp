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
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import WalkModeStepCountProgressBar from "../../components/graphs/WalkModeStepCountProgressBar";
import WalkModeStepCountProgressBar2 from "../../components/graphs/WalkModeStepCountProgressBar2";


const { width, height } = Dimensions.get("window");

export const StackingAnalysis = () => {

   
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value of 0
  const [activeTab, setActiveTab] = useState("Walk Mode");

  const handleBack = () => {
    navigation.goBack();
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
            <TouchableOpacity onPress={handleBack}>
              <Image
                source={require("../../assets/icons/RightArrow.png")}
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                marginLeft: 15,
                fontFamily: "Lexend",
              }}
            >
             Stacking Analysis
            </Text>
            <View style={{ flex: 1 }} />
            <View style={{ flexDirection: "row" }}>
              
                <Image
                              source={require("../../assets/icons/Token-Count.png")}
                              style={{ width: 78, height: 32, marginRight: 10 }}
                />
             
            </View>
          </View>
          <ScrollView style={{ flex: 1, marginBottom: 60 ,marginTop : 20  }}>
              <View
                         style={{
                           flexDirection: "row",
                           justifyContent: "center",
                           alignItems: "center",
                           marginTop: 15,
                         }}
                       >
                         <Image
                           source={require("../../assets/images/Milestone Achiever.png")}
                           style={{
                             width: width * 0.9,
                             height: 94,
                             
                           }}
                         />
                       </View>

                       <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 40, position: "relative" }}>
                <WalkModeStepCountProgressBar2 percentage={75} duration={2000} />
                <View style={{ position: "absolute", top: "50%", left: "50%", transform: [{ translateX: '-50%' }, { translateY: '-50%' }], alignItems: "center" }}>
                  <Image
                    source={require(`../../assets/images/SSBIcon.png`)} // Ensure path is correct for the card background
                    resizeMode="contain"
                    style={{ width: 40, height: 49 }}
                  />
                  <Text style={{ fontFamily: "Lexend", color: "#fff", fontSize: 29, fontWeight: "600" }}>828</Text>
                  <Text style={{ fontFamily: "Lexend", color: "#727272", fontSize: 14, fontWeight: "600", alignSelf: "center", marginTop: 5 }}>Today</Text>
                  <Text style={{ fontFamily: "Lexend", color: "#727272", fontSize: 14, fontWeight: "600", marginTop: 3}}>Pool Share: 100%</Text>
                  <Text style={{ fontFamily: "Lexend", color: "#F78300", fontSize: 14, fontWeight: "600", marginTop: 3 }}>Pool Share: 16%</Text>
                </View>
              </View>
              <View style={styles.ssbContainer}>
              <View style={styles.ssbCard}>
        <Text style={styles.ssbCardTitle}>Last Day SSBT</Text>
        <Text style={styles.ssbCardValue}>+828</Text>
      </View>
      <View style={styles.ssbCard}>
        <Text style={styles.ssbCardTitle}>30-Days SSBT</Text>
        <Text style={styles.ssbCardValue}>+24,840</Text>
      </View>
      <View style={styles.ssbCard}>
        <Text style={styles.ssbCardTitle}>60-Days SSBT</Text>
        <Text style={styles.ssbCardValue}>+49,680</Text>
      </View>
      </View>
      <View style={{margin: 20}}>
        <Text style={{fontFamily:"Lexend",color: "#fff",fontSize:24}}>Staking Rewards Earned</Text>
        <Image source={require("../../assets/images/Graph2.png")} style={{width: width * 0.9, height: height * 0.3,marginTop: 20}}/>

      </View>
           
          </ScrollView>
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
  ssbCard: {
    backgroundColor: "#262A34",
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 15,
    alignItems: "center",
    
    marginHorizontal: 5,
  },
  ssbCardTitle: {
    color: "#727272",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Lexend",
   
  },
  ssbCardValue: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
    textAlign: "left",
    alignSelf: "flex-start",
    marginTop: 6,
    fontFamily: "Lexend",
  },
  ssbContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    
    marginTop: 20,
    marginHorizontal: 10,
  },
  
});

export default StackingAnalysis;
