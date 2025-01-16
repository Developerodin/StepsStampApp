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
import Deposit from "../../assets/icons/Deposit.png";
import Withdrawl from "../../assets/icons/Widrawel.png";

const { width, height } = Dimensions.get("window");

export const TransactionHistory = () => {
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
              Transaction History
            </Text>
            <View style={{ flex: 1 }} />
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../assets/icons/Filter.png")}
                style={{ width: 28, height: 28 }}
              />
            </View>
          </View>
          <ScrollView style={{ flex: 1, marginBottom: 60 ,marginTop: 20}}>
           

          
            <View style={styles.card}>
              <Image source={Deposit} style={styles.icon} />
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.title}>Deposit</Text>
                  <Text style={styles.subText}>Today, 11.59 PM</Text>
                </View>
                <View style={styles.amountContainer}>
                  <Text style={styles.amount}>1 USDT -$ 81.2</Text>
                  <Text style={styles.subText}>COMPLETED</Text>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <Image source={Withdrawl} style={styles.icon} />
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.title}>Withdrawal</Text>
                  <Text style={styles.subText}>Today, 11.59 PM</Text>
                </View>
                <View style={styles.amountContainer}>
                  <Text style={styles.amount}>1 USDT -$ 81.2</Text>
                  <Text style={styles.subText}>COMPLETED</Text>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <Image source={Deposit} style={styles.icon} />
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.title}>Deposit</Text>
                  <Text style={styles.subText}>Today, 11.59 PM</Text>
                </View>
                <View style={styles.amountContainer}>
                  <Text style={styles.amount}>1 USDT -$ 81.2</Text>
                  <Text style={styles.subText}>COMPLETED</Text>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <Image source={Withdrawl} style={styles.icon} />
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.title}>Withdrawal</Text>
                  <Text style={styles.subText}>Today, 11.59 PM</Text>
                </View>
                <View style={styles.amountContainer}>
                  <Text style={styles.amount}>1 USDT -$ 81.2</Text>
                  <Text style={styles.subText}>COMPLETED</Text>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <Image source={Withdrawl} style={styles.icon} />
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.title}>Withdrawal</Text>
                  <Text style={styles.subText}>Today, 11.59 PM</Text>
                </View>
                <View style={styles.amountContainer}>
                  <Text style={styles.amount}>1 USDT -$ 81.2</Text>
                  <Text style={[styles.subText ,{color: "#C12F2F"}]}>FAILED</Text>
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

export default TransactionHistory;
