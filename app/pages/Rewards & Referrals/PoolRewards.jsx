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
import USDT from "../../assets/icons/SSB2.png";
import SSB from "../../assets/icons/SSB.png";
import Blockchain from "../../assets/icons/SSB3.png";
import Deposit from "../../assets/icons/Deposit.png";
import Withdrawl from "../../assets/icons/Widrawel.png";
import GradientCard from "../../components/cards/GradientCard";
import LeaderboardCard from "../../components/cards/LeaderboardCard";

const { width, height } = Dimensions.get("window");

export const PoolRewards = () => {

    const leaderboardData = [
        {
          rank: 1,
          name: "Lar********",
          days: 121,
          bgColor: "#D48500",
          
        },
        {
          rank: 2,
          name: "Lar********",
          days: 121,
          bgColor: "#747474",
         
        },
        {
          rank: 3,
          name: "Sun******** (You)",
          days: 121,
          bgColor: "#ECA26C",
         
        },
        {
          rank: 4,
          name: "Lar********",
          days: 121,
          bgColor: "#262A34",
         
        },
        {
          rank: 5,
          name: "Lar********",
          days: 121,
          bgColor: "#262A34",
         
        },
        {
            rank: 6,
            name: "Lar********",
            days: 121,
            bgColor: "#262A34",
           
          },
          {
            rank: 7,
            name: "Lar********",
            days: 121,
            bgColor: "#262A34",
           
          },
      ];
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value of 0
  const [activeTab, setActiveTab] = useState("Walk Mode");

  const handleBack = () => {
    navigation.goBack();
  };

  const handelStake = () => {
    navigation.navigate("EnableStacking");
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
              Pool B Rewards
            </Text>
            <View style={{ flex: 1 }} />
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity >
              <Image
                              source={require("../../assets/icons/token.png")}
                              style={{ width: 78, height: 30 }}
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
                source={require("../../assets/images/PoolB.png")}
                style={{
                  width: width * 0.9,
                  height: height * 0.15,
                  resizeMode: "contain",
                }}
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 0 }}>
                <GradientCard />
              </View>

              <View style={{padding: 20,}}>

              <Text style={styles.header}>Leaderboard</Text>
      <FlatList
        data={leaderboardData}
        keyExtractor={(item) => item.rank.toString()}
        renderItem={({ item }) => (
          <LeaderboardCard
            rank={item.rank}
            name={item.name}
            days={item.days}
            bgColor={item.bgColor}
            profileImage={item.profileImage}
          />
        )}
      />
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
  header: {
    fontSize: 24,
    color: "#FFFFFF",
    
    marginBottom: 16,
    fontFamily: "Lexend",
  },
  
});

export default PoolRewards;
