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
import USDT from "../../assets/icons/SSB2.png";
import SSB from "../../assets/icons/SSB.png";
import Blockchain from "../../assets/icons/SSB3.png";
import Deposit from "../../assets/icons/Deposit.png";
import Withdrawl from "../../assets/icons/Widrawel.png";

const { width, height } = Dimensions.get("window");

export const SsbWallet = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value of 0
  const [activeTab, setActiveTab] = useState("Walk Mode");

  const handleBack = () => {
    navigation.goBack();
  };

  const handelUsdWallet = () => {
    navigation.navigate("TransactionHistory");
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
              SSB Token
            </Text>
            <View style={{ flex: 1 }} />
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={handelUsdWallet}>
              <Image
                source={require("../../assets/icons/WatchIcon.png")}
                style={{ width: 28, height: 28 }}
              />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView style={{ flex: 1, marginBottom: 60 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Image
                source={require("../../assets/images/UsdCard.png")}
                style={{
                  width: width * 0.9,
                  height: height * 0.15,
                  resizeMode: "contain",
                }}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                gap: 40,
                alignItems: "center",
                marginTop: 10,
                alignSelf: "center",
                marginBottom: 20,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../../assets/icons/SendArrow.png")}
                  style={{ width: 60, height: 60 }}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 12,
                    fontFamily: "Lexend",
                    fontWeight: "600",
                    marginTop: 5,
                  }}
                >
                  Send
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../../assets/icons/Receive.png")}
                  style={{ width: 60, height: 60 }}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 12,
                    fontFamily: "Lexend",
                    fontWeight: "600",
                    marginTop: 5,
                  }}
                >
                  Receive
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../../assets/icons/Swap.png")}
                  style={{ width: 60, height: 60 }}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 12,
                    fontFamily: "Lexend",
                    fontWeight: "600",
                    marginTop: 5,
                  }}
                >
                  Swap
                </Text>
              </View>
            </View>
            <View style={styles.firstCard}>
              <View style={styles.firstCardContent}>
                <Image
                  source={require("../../assets/images/piggy.png")} // Replace with your mining icon path
                  style={styles.firstIcon}
                />
                <View style={styles.firstTextContainer}>
                  <Text style={styles.cardTitle}>Get Stacking Reward</Text>
                  <Text style={styles.cardSubtitle}>
                    Enable stacking for more rewards.
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.activateButton}>
                <Text style={styles.activateButtonText}>Enable</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 0, marginBottom: 20 }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 16,
                  fontFamily: "Lexend",
                  fontWeight: "600",
                  alignSelf: "flex-start",
                  marginTop: 20,
                  marginLeft: 20,
                }}
              >
                Transactions
              </Text>
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
  firstCard: {
    backgroundColor: "#181A20",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    borderColor: "#2A2A3B",
    borderWidth: 1,
    marginHorizontal: 20,
    marginBottom: 0,
  },
  firstCardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  firstIcon: {
    width: 20,
    height: 19,
    marginRight: 12,
  },
  firstTextContainer: {
    flexDirection: "column",
  },
  cardTitle: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "600",
    marginBottom: 4,
    fontFamily: "Lexend",
  },
  cardSubtitle: {
    fontSize: 13,
    color: "#B5B5BE",
    fontFamily: "Lexend",
  },
  activateButton: {
    backgroundColor: "#246BFD",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  activateButtonText: {
    color: "#53BFFD",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default SsbWallet;
