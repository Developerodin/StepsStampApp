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
import Icon1 from "../../assets/icons/PiggyIcon.png";
import Icon2 from "../../assets/icons/Icon2.png";
import Icon3 from "../../assets/icons/Icon3.png";
import Faq from "../../assets/icons/faq.png";

import AutoStackingCard from "../../components/cards/AutoStackingCard";
const { width, height } = Dimensions.get("window");

export const AutoStacking = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value of 0

  const handleSignIn = () => {
    navigation.goBack();
  };

  const handleStacking = () => {
    navigation.navigate("StackingPool");
    };

    const handleAnalysis = () => {
        navigation.navigate("StackingAnalysis");
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
                style={{ width: 78, height: 32, marginRight: 10 }}
              />
              <Image
                source={require("../../assets/icons/WatchIcon.png")}
                style={{ width: 28, height: 28 }}
              />
            </View>
          </View>
          <ScrollView style={{ flex: 1, marginBottom: 60 }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Image
                source={require("../../assets/images/SSBT.png")}
                style={{ width: 350, height: 133 }}
              />
            </View>
            <TouchableOpacity onPress={handleStacking}>
            <View style={styles.twoColumnCard}>
              <View style={styles.headerRow}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={require("../../assets/icons/piggyBank.png")}
                    style={{ width: 24, height: 24 }}
                  />
                  <Text style={styles.headerText}>Phase B </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image source={Faq} style={{ width: 18, height: 18 }} />
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
            </TouchableOpacity>
            <View>
            
                <AutoStackingCard />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
                marginVertical: 10,
              }}
            >
              <Text
                style={{ color: "#fff", fontSize: 20, fontFamily: "Lexend" }}
              >
                Stacking History
              </Text>
            </View>
            <View style={styles.card}>
              <Image
                source={Icon1} // Replace with your icon URL
                style={styles.icon}
              />
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.title}>Auto SSBTs Staked</Text>
                  <Text style={styles.subText}>Today, 11.59 PM</Text>
                </View>
                <View style={styles.amountContainer}>
                  <Text style={styles.amount}>+15 SSBTs</Text>
                  <Text style={styles.subText}>referred to xuser</Text>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <Image
                source={Icon3} // Replace with your icon URL
                style={styles.icon}
              />
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.title}>Auto Stake Reward</Text>
                  <Text style={styles.subText}>Today, 11.59 PM</Text>
                </View>
                <View style={styles.amountContainer}>
                  <Text style={styles.amount}>+15 SSBT</Text>
                  <Text style={styles.subText}>1500 STEPS COMPLETED</Text>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <Image
                source={Icon3} // Replace with your icon URL
                style={styles.icon}
              />
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.title}>Auto Stake Reward</Text>
                  <Text style={styles.subText}>Today, 11.59 PM</Text>
                </View>
                <View style={styles.amountContainer}>
                  <Text style={styles.amount}>+828 SSBTs</Text>
                  <Text style={styles.subText}>1,60,000 SSBTs Stacked</Text>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <Image
                source={Icon3} // Replace with your icon URL
                style={styles.icon}
              />
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.title}>Manual Stake Reward</Text>
                  <Text style={styles.subText}>Today, 11.59 PM</Text>
                </View>
                <View style={styles.amountContainer}>
                  <Text style={styles.amount}>+15 SSBTs</Text>
                  <Text style={styles.subText}>referred to xuser</Text>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <Image
                source={Icon3} // Replace with your icon URL
                style={styles.icon}
              />
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.title}>Auto Stake Reward</Text>
                  <Text style={styles.subText}>Today, 11.59 PM</Text>
                </View>
                <View style={styles.amountContainer}>
                  <Text style={styles.amount}>+15 SSBT</Text>
                  <Text style={styles.subText}>1500 STEPS COMPLETED</Text>
                </View>
              </View>
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
    backgroundColor: "transparent",
    marginTop: 20,
    borderRadius: 10,
    padding: 20,
    borderColor: "#727272",
    borderWidth: 1,
    paddingHorizontal: 20,

    marginHorizontal: 20,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Lexend",
    marginLeft: 10,
  },
  headerLink: {
    color: "#246BFD",
    fontSize: 14,
    marginLeft: 5,
    fontFamily: "Lexend",
  },

  columnsContainer: {
    flexDirection: "row",
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  dividerVertical: {
    width: 2,
    backgroundColor: "#242731",
    marginHorizontal: 10,
  },
  columnText: {
    color: "#727272",
    fontSize: 12,
    marginBottom: 0,
    fontFamily: "Lexend",
    alignSelf: "self-start",
  },
  columnValue: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Lexend",
    alignSelf: "self-start",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#262A34", // Card background color
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  icon: {
    width: 34,
    height: 34,
  },
  cardContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  title: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Lexend",
  },
  amountContainer: {
    alignItems: "flex-end",
  },
  amount: {
    color: "#fff", // Green color for the amount
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Lexend",
  },
  subText: {
    color: "#9C9EA3",
    fontSize: 11,
    marginTop: 3,
    fontFamily: "Lexend",
  },
});

export default AutoStacking;
