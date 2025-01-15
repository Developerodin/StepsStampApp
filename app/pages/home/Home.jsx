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
import WalkModeStepCountProgressBar from '../../components/graphs/WalkModeStepCountProgressBar';
import SmallProgressBar from '../../components/graphs/SmallProgressBar';
import RewardModeStepCountProgressBar from '../../components/graphs/RewardModeStepCountProgressBar'
import RunningCard from '../../components/cards/RunningCard'
import { LinearGradient } from 'expo-linear-gradient';
import TabComponent from "../../components/cards/TabComponent";
import SmallProgressBar2 from "../../components/graphs/SmallProgressBar2";


const { width, height } = Dimensions.get("window");

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

          {/* Conditional Content */}
          {activeTab === "Walk Mode" ? (
            <>
            <ScrollView style={{ flex: 1,marginBottom:80 }}>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 40, position: "relative" }}>
                <WalkModeStepCountProgressBar percentage={25} duration={1000} />
                <View style={{ position: "absolute", top: "50%", left: "50%", transform: [{ translateX: '-50%' }, { translateY: '-50%' }], alignItems: "center" }}>
                  <Image
                    source={require(`../../assets/icons/walk.png`)} // Ensure path is correct for the card background
                    resizeMode="contain"
                    style={{ width: 60, height: 60 }}
                  />
                  <Text style={{ fontFamily: "Lexend", color: "#fff", fontSize: 28, fontWeight: "600" }}>3,163</Text>
                  <Text style={{ fontFamily: "Lexend", color: "#727272", fontSize: 12, fontWeight: "600", alignSelf: "center", marginTop: 5 }}>Today</Text>
                  <Text style={{ fontFamily: "Lexend", color: "#727272", fontSize: 12, fontWeight: "600", marginTop: 5 }}>Daily Goal: 10,000</Text>
                </View>
              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 30, marginTop: 40 }}>
                <View style={{ alignItems: "center" }}>
                  <SmallProgressBar
                    size={80}
                    percentage={40}
                    duration={1000}
                    image={
                      <Image
                        source={require(`../../assets/icons/fire.png`)}
                        resizeMode="contain"
                        style={{ width: 30, height: 30 }}
                      />
                    }
                  />
                  <Text style={{ color: "#fff", fontSize: 16, fontFamily: "Lexend", fontWeight: "600" }}>122 Kcal</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <SmallProgressBar
                    size={80}
                    percentage={40}
                    duration={1000}
                    image={
                      <Image
                        source={require(`../../assets/icons/location.png`)}
                        resizeMode="contain"
                        style={{ width: 30, height: 30 }}
                      />
                    }
                  />
                  <Text style={{ color: "#fff", fontSize: 16, fontFamily: "Lexend", fontWeight: "600" }}>2.5 Km</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <SmallProgressBar
                    size={80}
                    percentage={40}
                    duration={1000}
                    image={
                      <Image
                        source={require(`../../assets/icons/time.png`)}
                        resizeMode="contain"
                        style={{ width: 30, height: 30 }}
                      />
                    }
                  />
                  <Text style={{ color: "#fff", fontSize: 16, fontFamily: "Lexend", fontWeight: "600" }}>5.5 hrs</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
                <TabComponent />
              </View>
              </ScrollView>
            </>
          ) : (
            <ScrollView style={{ flex: 1,marginBottom:80 }}>
                <LinearGradient
      colors={['#E42A6C', '#C393FF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradientBorder}
    >
              <View style={styles.firstCard}>
      <View style={styles.cardContent}>
        <Image
          source={require('../../assets/icons/mining-icon.png')} // Replace with your mining icon path
          style={styles.icon}
        />
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>Activate Mining</Text>
          <Text style={styles.cardSubtitle}>Start mining your first blockchain.</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.activateButton}>
        <Text style={styles.activateButtonText}>Activate</Text>
      </TouchableOpacity>
    </View>
    </LinearGradient>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 40, position: "relative" }}>
                <RewardModeStepCountProgressBar outerPercentage={20} innerPercentage={70} duration={1000} />
                <View style={{ position: "absolute", top: "50%", left: "50%", transform: [{ translateX: '-50%' }, { translateY: '-50%' }], alignItems: "center" }}>
                  <Image
                    source={require(`../../assets/icons/walk.png`)} // Ensure path is correct for the card background
                    resizeMode="contain"
                    style={{ width: 55, height: 55 }}
                  />
                  <Text style={{ fontFamily: "Lexend", color: "#fff", fontSize: 28, fontWeight: "600" }}>3,163</Text>
                  <Text style={{ fontFamily: "Lexend", color: "#727272", fontSize: 12, fontWeight: "600", alignSelf: "center", marginTop: 2 }}>Today</Text>
                  <Text style={{ fontFamily: "Lexend", color: "#727272", fontSize: 12, fontWeight: "600", marginTop: 1 }}>Pool A: 1,500</Text>
                  <Text style={{ fontFamily: "Lexend", color: "#727272", fontSize: 12, fontWeight: "600", marginTop: 1 }}>Pool B: 10,000</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 40 }}>
                <RunningCard />
              </View>
              <Text style={{ color: "#fff", fontSize: 16, fontFamily: "Lexend", fontWeight: "600", alignSelf: "flex-start", marginTop: 20, paddingLeft: 16 }}>Achievements</Text>
              <View style={styles.card}>
                <View style={styles.textContainer}>
                  <Text style={styles.title}>Pool A</Text>
                  <Text style={styles.subtitle}>Complete 1500 steps to join Pool A</Text>
                </View>
                <View style={styles.progressBarContainer}>
                  <SmallProgressBar2
                    size={80}
                    percentage={40}
                    duration={1000}
                    image={
                      <Image
                        source={require('../../assets/icons/goalsO.png')}
                        resizeMode="contain"
                        style={{ width: 32, height: 32 }}
                      />
                    }
                  />
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.textContainer}>
                  <Text style={styles.title}>Pool B</Text>
                  <Text style={styles.subtitle}>Complete 10,000 steps to join Pool B</Text>
                </View>
                <View style={styles.progressBarContainer}>
                  <SmallProgressBar
                    size={80}
                    percentage={40}
                    duration={1000}
                    image={
                      <Image
                        source={require('../../assets/icons/goalsB.png')}
                        resizeMode="contain"
                        style={{ width: 32, height: 32 }}
                      />
                    }
                  />
                </View>
              </View>
              <Text style={{ color: "#fff", fontSize: 16, fontFamily: "Lexend", fontWeight: "600", alignSelf: "flex-start", marginTop: 20, paddingLeft: 16 }}>We have something for you!</Text>
              <View style={{  alignItems: "center", marginTop: 20  }}>
                <Image source={require('../../assets/images/SilverWatch.png')} style={{ width: width * 0.9, height: height * 0.26}} />
                <Image source={require('../../assets/images/GoldWatch.png')} style={{ width: width * 0.9, height: height * 0.26,marginTop:15 }} />
                <Image source={require('../../assets/images/GreenWatch.png')} style={{ width: width * 0.9, height: height * 0.26 ,marginTop:15 }} />

              </View>
            </ScrollView>
          )}
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
    borderBottomWidth: 2,
    borderBottomColor: "#246BFD",
  },
  tabText: {
    color: "#7E7E7E",
    fontSize: 16,
  },
  activeTabText: {
    color: "#fff",
  },
  card: {
    backgroundColor: '#262A34',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  
    marginHorizontal: 16,
    marginTop: 20,
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
    marginBottom: 8,
    fontFamily: 'Lexend',
  },
  subtitle: {
    fontSize: 13,
    color: '#B5B5BE',
    fontFamily: 'Lexend',
  },
  progressBarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientBorder: {
    borderRadius: 12,
    padding: 1.5, 
    marginHorizontal: 16,
    marginTop: 20,
  },
  firstCard: {
    backgroundColor: '#181A20',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
    
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  cardTextContainer: {
    flexDirection: 'column',
  },
  cardTitle: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
    marginBottom: 4,
    fontFamily: 'Lexend',
  },
  cardSubtitle: {
    fontSize: 11,
    color: '#B5B5BE',
    fontFamily: 'Lexend',
  },
  activateButton: {
    backgroundColor: '#53BFFD',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  activateButtonText: {
    color: '#246BFD',
    fontWeight: '600',
    fontSize: 13,
  },

});

export default Home;