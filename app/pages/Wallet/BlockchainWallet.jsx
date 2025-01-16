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
import ImageCard from "../../components/cards/ImageCard";
import BlockChain from "../../assets/images/CardImage.png";

const { width, height } = Dimensions.get("window");

export const BlockchainWallet = () => {
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
              Blockchain Wallet
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
                source={require("../../assets/images/BcToken.png")}
                style={{
                  width: width * 0.9,
                  height: height * 0.15,
                  resizeMode: "contain",
                }}
              />
            </View>

            <View style={styles.appContainer}>
      <Text style={styles.header}>Blockchains Achieved</Text>
      <View style={styles.cardList}>
        <ImageCard
          title="G150 Mini SSB"
          price="USDT50.00"
          blocks="150 Blocks"
          
        />
        <ImageCard
          title="G75 Micro SSB"
          price="USDT50.00"
          blocks="75 Blocks"
          
        />
      </View>
    </View>
    <View style={styles.appContainer}>
      <Text style={styles.header}>Other Blockchains, You Have</Text>
      <View style={styles.cardList}>
        <ImageCard
          title="Gold SS Blockchain"
          price="USDT50.00"
          blocks="450 Blocks"
          
        />
        <ImageCard
          title="Gold SS Blockchain"
          price="USDT50.00"
          blocks="450 Blocks"
          
        />
      </View>
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
                History
              </Text>
            </View>
            <View style={styles.card}>
              <Image source={Deposit} style={styles.icon} />
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.title}>Gold Mini Achieved</Text>
                  <Text style={styles.subText}>Yesterday, 02.30 PM</Text>
                </View>
                <View style={styles.amountContainer}>
                  <Text style={styles.amount}>1 Qty.</Text>
                  <Text style={styles.subText}>COMPLETED</Text>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <Image source={Deposit} style={styles.icon} />
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.title}>Gold Mini Achieved</Text>
                  <Text style={styles.subText}>Yesterday, 02.30 PM</Text>
                </View>
                <View style={styles.amountContainer}>
                  <Text style={styles.amount}>1 Qty.</Text>
                  <Text style={styles.subText}>COMPLETED</Text>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <Image source={Deposit} style={styles.icon} />
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.title}>Gold Mini Achieved</Text>
                  <Text style={styles.subText}>Yesterday, 02.30 PM</Text>
                </View>
                <View style={styles.amountContainer}>
                  <Text style={styles.amount}>1 Qty.</Text>
                  <Text style={styles.subText}>COMPLETED</Text>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <Image source={Deposit} style={styles.icon} />
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.title}>Gold Mini Achieved</Text>
                  <Text style={styles.subText}>Yesterday, 02.30 PM</Text>
                </View>
                <View style={styles.amountContainer}>
                  <Text style={styles.amount}>1 Qty.</Text>
                  <Text style={styles.subText}>COMPLETED</Text>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <Image source={Deposit} style={styles.icon} />
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.title}>Gold Mini Achieved</Text>
                  <Text style={styles.subText}>Yesterday, 02.30 PM</Text>
                </View>
                <View style={styles.amountContainer}>
                  <Text style={styles.amount}>1 Qty.</Text>
                  <Text style={styles.subText }>COMPLETED</Text>
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
  appContainer: {
    
    
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontFamily: "Lexend",
    color: "white",
    marginBottom: 20,
  },
  cardList: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default BlockchainWallet;
