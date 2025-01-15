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
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Icon1 from "../../assets/icons/Icon1.png";
import Icon2 from "../../assets/icons/Icon2.png";
import Icon3 from "../../assets/icons/Icon3.png";
import Faq from "../../assets/icons/faq.png";
import Piggy from "../../assets/icons/piggy.png";
import { LinearGradient } from "expo-linear-gradient";

import Icon from 'react-native-vector-icons/FontAwesome';
import GradientButton from "../../components/Button/GradientButton";
const { width, height } = Dimensions.get("window");

export const DSSBank = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value of 0

  const handleSignIn = () => {
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
            <TouchableOpacity onPress={handleSignIn} activeOpacity={0.8}>
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
              DSS Bank
            </Text>
            <View style={{ flex: 1 }} />
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../assets/icons/Token-Count.png")}
                style={{ width: 78, height: 32 ,marginRight:10 }}
              />
              <Image
                source={require("../../assets/icons/WatchIcon.png")}
                style={{ width: 28, height: 28 }}
              />
            </View>
          </View>
          <ScrollView style={{ flex: 1 ,marginBottom:60}}>
            <View style={{flex:1,justifyContent:"center",alignItems:"center",marginTop:20}}>
               <Image source={require("../../assets/images/SSBT.png")} style={{ width : 350,height: 133}}/>
            </View>
            <View style={styles.twoColumnCard}>
          <View style={styles.headerRow}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Image source={require("../../assets/icons/piggyBank.png")} style={{ width : 24,height: 24}}/>
            <Text style={styles.headerText}>Phase B </Text>
            </View>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Image source={Faq} style={{ width : 18,height: 18}}/>
            <Text style={styles.headerLink}>FAQs</Text>
            </View>
          </View>
         
          <View style={styles.columnsContainer}>
            <View style={styles.column}>
              <Text style={styles.columnText}>Stacking Reward Supply</Text>
              <Text style={styles.columnValue}>5,173 SSBTs</Text>
            </View>
            <View style={styles.dividerVertical} />
            <View style={styles.column}>
              <Text style={styles.columnText}>Total Staked In Pool</Text>
              <Text style={styles.columnValue}>1,000,000 SSBTs</Text>
            </View>
          </View>
            </View>

            <Text style={{ color: "#fff", fontSize: 16, fontFamily: "Lexend", fontWeight: "600", alignSelf: "flex-start", marginTop: 20, marginLeft: 20 }}>Become a Stakeholder</Text>

            <View style={{alignItems:"center",marginTop:20}}> 
                <GradientButton title="PARTICIPATE IN STAKING POOL" icon={Piggy} />

            </View>
            <View style={{alignItems:"center",marginTop:35}}> 
                <Image source={require("../../assets/icons/Search.png")} style={{ width : 120,height: 120}}/>
                <Text style={{ color: "#fff", fontSize: 13, fontFamily: "Lexend", fontWeight: "600", alignSelf: "center", marginTop: 20 ,opacity:0.4}}>Looks like you do not have any blockchains </Text>
                <Text style={{ color: "#fff", fontSize: 13, fontFamily: "Lexend", fontWeight: "600", alignSelf: "center", marginTop: 0,opacity:0.4 }}> to start with?</Text>
                <Image source={require("../../assets/icons/BlockChain.png")} style={{ width : 198,height: 45,marginTop: 15}}/>
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
  twoColumnCard: {
    backgroundColor: 'transparent',
    marginTop: 20,
    borderRadius: 10,
    padding: 20,
    borderColor: '#727272',
    borderWidth: 1,
    paddingHorizontal: 20,
  
    marginHorizontal: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: "Lexend",
    marginLeft: 10,
  },
  headerLink: {
    color: '#246BFD',
    fontSize: 14,
    marginLeft: 5,
    fontFamily: "Lexend",
  },
 
  columnsContainer: {
    flexDirection: 'row',
    
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  dividerVertical: {
    width: 2,
    backgroundColor: '#242731',
    marginHorizontal: 10,
  },
  columnText: {
    color: '#727272',
    fontSize: 12,
    marginBottom: 0,
    fontFamily: "Lexend",
    alignSelf: 'self-start',
  },
  columnValue: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    fontFamily: "Lexend",
    alignSelf: 'self-start',
  },
  
});

export default DSSBank;
