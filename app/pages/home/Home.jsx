import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
import RunningCard from "../../components/cards/RunningCard";

export const Home = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value of 0
  const [activeTab, setActiveTab] = useState("Walk Mode");

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
        <Animated.View style={{ opacity: fadeAnim }}>
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
              source={require("../../assets/icons/menu.png")}
              style={{ width: 25, height: 25 }}
            />
            <View style={{ flex: 1 }} />
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../assets/icons/watch.png")}
                style={{ width: 96, height: 30, marginRight: 15 }}
              />
              <Image
                source={require("../../assets/icons/token.png")}
                style={{ width: 78, height: 30 }}
              />
            </View>
          </View>

          {/* Tabs */}
          <View style={styles.tabsContainer}>
            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === "Walk Mode" && styles.activeTab,
              ]}
              onPress={() => setActiveTab("Walk Mode")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "Walk Mode" && styles.activeTabText,
                ]}
              >
                Walk Mode
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === "Reward Mode" && styles.activeTab,
              ]}
              onPress={() => setActiveTab("Reward Mode")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "Reward Mode" && styles.activeTabText,
                ]}
              >
                Reward Mode
              </Text>
            </TouchableOpacity>
          </View>

          <RunningCard />
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
  content: {},
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#7E7E7E",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: "#246BFD",
  },
  tabText: {
    color: "#7E7E7E",
    fontSize: 16,
    fontFamily: "Lexend",
  },
  activeTabText: {
    color: "#fff",
  },
});

export default Home;