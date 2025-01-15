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
import Icon1 from "../../assets/icons/White.png";
import Icon2 from "../../assets/icons/Gold.png";
import Faq from "../../assets/icons/faq.png";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

export const Profile = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value of 0
  const [activeTab, setActiveTab] = useState("Achievements");
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
              Profile
            </Text>
            <View style={{ flex: 1 }} />
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../assets/icons/token.png")}
                style={{ width: 78, height: 30 }}
              />
            </View>
          </View>
          <ScrollView style={{ flex: 1, marginBottom: 90 }}>
          <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Image
                source={require("../../assets/images/Profile.png")}
                style={{
                  width: width * 0.9,
                  height: 221,
                  resizeMode: "contain",
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 16,
                paddingVertical: 10,
                marginTop: 20,
                marginHorizontal: 10,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  style={[
                    styles.tab,
                    activeTab === "Achievements" && styles.activeTab,
                  ]}
                  onPress={() => setActiveTab("Achievements")}
                >
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === "Achievements" && styles.activeTabText,
                    ]}
                  >
                    Achievements
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.tab,
                    activeTab === "Rewards" && styles.activeTab,
                  ]}
                  onPress={() => setActiveTab("Rewards")}
                >
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === "Rewards" && styles.activeTabText,
                    ]}
                  >
                    Rewards
                  </Text>
                </TouchableOpacity>
              </View>
              {/* <TouchableOpacity style={styles.faqContainer}>
                <Image source={Faq} style={styles.faqIcon} />
                <Text style={styles.faqText}>FAQs</Text>
              </TouchableOpacity> */}
            </View>
            <Text style={{ color: "#fff", fontSize: 16, fontFamily: "Lexend", fontWeight: "600", alignSelf: "flex-start", marginVertical: 10, marginLeft: 20 }}>Blockchains You Owned</Text>
            <View style={styles.cardContainer}>
      <View style={styles.iconContainer}>
        <Image
          source={Icon1}
          style={styles.icon}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>White Blockchain</Text>
        <Text style={styles.subtitle}>450 Blocks</Text>
      </View>
      {/* Badge positioned at the bottom-right */}
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>Activated</Text>
      </View>
    </View>
    <View style={styles.cardContainer}>
      <View style={styles.iconContainer}>
        <Image
          source={Icon2}
          style={styles.icon}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Gold Blockchain</Text>
        <Text style={styles.subtitle}>450 Blocks</Text>
      </View>
      {/* Badge positioned at the bottom-right */}
     
    </View>
    <Text style={{ color: "#fff", fontSize: 16, fontFamily: "Lexend", fontWeight: "600", alignSelf: "flex-start", marginTop: 20, marginLeft: 20 }}>Watches You Owned</Text>
                  <View style={{  alignItems: "center", marginTop: 10  }}>
                    <Image source={require('../../assets/images/GreenWatch.png')} style={{ width: width * 0.9, height: height * 0.26 }} />
    
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

  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "transparent", // Inactive tab background
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: "#246BFD", // Active tab background
  },
  tabText: {
    color: "#5E6272", // Inactive tab text color
    fontSize: 13,
    fontFamily: "Lexend",
  },
  activeTabText: {
    color: "#fff", // Active tab text color
  },
  faqContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  faqIcon: {
    marginRight: 5,
    height: 18,
    width: 18,
  },
  faqText: {
    color: "#246BFD", // FAQ text color
    fontSize: 13,
    fontFamily: "Lexend",
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent', // Card background color
    borderRadius: 16,
    padding: 14,
    marginVertical: 8,
    position: 'relative', 
    marginHorizontal: 20,
    borderColor: "#9C9EA3",
    borderWidth: 1,
  },
  iconContainer: {
    
    marginRight: 12,
  },
  icon: {
    width: 70,
    height: 65,
   
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#ffffff', // Title color
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Lexend',
  },
  subtitle: {
    color: '#9C9EA3', // Subtitle color
    fontSize: 14,
    marginTop: 4,
    fontFamily: 'Lexend',
  },
  badgeContainer: {
    position: 'absolute', 
    bottom: 0,
    right: 0, 
    backgroundColor: '#5E6272', 
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    opacity: 0.3,
  },
  badgeText: {
    color: '#ffffff', // Badge text color
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Lexend',
    
  },
});

export default Profile;
