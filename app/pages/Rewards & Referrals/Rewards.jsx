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
import { LinearGradient } from "expo-linear-gradient";
import SmallProgressBar from "../../components/graphs/SmallProgressBar";
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get("window");

export const Rewards = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value of 0
  const [activeTab, setActiveTab] = useState('Rewards');
  const handleSignIn = () => {
    navigation.navigate("SignIn");
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
            <Image
              source={require("../../assets/icons/RightArrow.png")}
              style={{ width: 25, height: 25 }}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                marginLeft: 15,
                fontFamily: "Lexend",
              }}
            >
              Reward & Referrals
            </Text>
            <View style={{ flex: 1 }} />
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../assets/icons/token.png")}
                style={{ width: 78, height: 30 }}
              />
            </View>
          </View>
          <ScrollView style={{ flex: 1 ,marginBottom:60}}>
          <View style={{flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 20,
    marginHorizontal: 10}}>
      <View style={{flexDirection: 'row',
    alignItems: 'center'}}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Rewards' && styles.activeTab]}
          onPress={() => setActiveTab('Rewards')}
        >
          <Text style={[styles.tabText, activeTab === 'Rewards' && styles.activeTabText]}>
            Rewards
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Referrals' && styles.activeTab]}
          onPress={() => setActiveTab('Referrals')}
        >
          <Text style={[styles.tabText, activeTab === 'Referrals' && styles.activeTabText]}>
            Referrals
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.faqContainer}>
        <Image source={Faq} style={styles.faqIcon} />
        <Text style={styles.faqText}>FAQs</Text>
      </TouchableOpacity>
    </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Image
                source={require("../../assets/images/Achiever.png")}
                style={{
                  width: width * 0.9,
                  height: 94,
                  resizeMode: "contain",
                }}
              />
            </View>
            <View style={styles.secondCard}>
              <View style={styles.secondTextContainer}>
                <Text style={styles.secondtitle}>Pool B</Text>
                <Text style={styles.secondsubtitle}>
                  Complete 10000 steps to join Pool B
                </Text>
              </View>
              <View style={styles.progressBarContainer}>
                <SmallProgressBar
                  size={80}
                  percentage={40}
                  duration={1000}
                  image={
                    <Image
                      source={require("../../assets/icons/goalsB.png")}
                      resizeMode="contain"
                      style={{ width: 32, height: 32 }}
                    />
                  }
                />
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

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 20,
                marginBottom: 15,
              }}
            >
              <Text
                style={{ color: "#fff", fontSize: 20, fontFamily: "Lexend" }}
              >
                Rewards History
              </Text>
              <Text
                style={{
                  color: "#B5B5BE",
                  fontSize: 14,
                  marginLeft: 20,
                  fontFamily: "Lexend",
                }}
              >
                See More >{" "}
              </Text>
            </View>

            <View style={styles.card}>
              <Image
                source={Icon1} // Replace with your icon URL
                style={styles.icon}
              />
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.title}>Referral Bonus</Text>
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
                source={Icon2} // Replace with your icon URL
                style={styles.icon}
              />
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.title}>Pool A Reward</Text>
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
                source={Icon1} // Replace with your icon URL
                style={styles.icon}
              />
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.title}>Referral Bonus</Text>
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
                source={Icon2} // Replace with your icon URL
                style={styles.icon}
              />
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.title}>Pool A Reward</Text>
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
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#262A34", // Card background color
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
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
    marginTop: 20,
    borderColor: "#2A2A3B",
    borderWidth: 1,
    marginHorizontal: 20,
    marginBottom: 20,
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
  secondCard: {
    backgroundColor: "#262A34",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginHorizontal: 20,
    marginTop: 20,
  },
  secondTextContainer: {
    flex: 1,
    marginRight: 16,
  },
  secondtitle: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "600",
    marginBottom: 8,
    fontFamily: "Lexend",
  },
  secondsubtitle: {
    fontSize: 12,
    color: "#B5B5BE",
    fontFamily: "Lexend",
  },
  progressBarContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'transparent', // Inactive tab background
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: '#246BFD', // Active tab background
  },
  tabText: {
    color: '#5E6272', // Inactive tab text color
    fontSize: 13,
    fontFamily: 'Lexend',
  },
  activeTabText: {
    color: '#fff', // Active tab text color
  },
  faqContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  faqIcon: {
    marginRight: 5, 
    height: 18,
    width: 18,

  },
  faqText: {
    color: '#246BFD', // FAQ text color
    fontSize: 13,
    fontFamily: 'Lexend',
  },
});

export default Rewards;
