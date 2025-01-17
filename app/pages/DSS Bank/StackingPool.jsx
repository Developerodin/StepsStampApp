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
import LeaderboardCard from "../../components/cards/LeaderboardCard";
import GradientButton from "../../components/Button/GradientButton";
import Piggy from "../../assets/icons/piggy.png";
import GradientCard2 from "../../components/cards/GradientCard2";
import Icon1 from "../../assets/icons/PiggyIcon.png";

const { width, height } = Dimensions.get("window");

export const StackingPool = () => {

    const leaderboardData = [
        {
          rank: 1,
          name: "Lar********",
          days: 20,
          bgColor: "#D48500",
          
        },
        {
          rank: 2,
          name: "Lar********",
          days: 20,
          bgColor: "#747474",
         
        },
        {
          rank: 3,
          name: "Sun******** (You)",
          days: 20,
          bgColor: "#ECA26C",
         
        },
        {
          rank: 4,
          name: "Lar********",
          days: 20,
          bgColor: "#262A34",
         
        },
        {
          rank: 5,
          name: "Lar********",
          days: 20,
          bgColor: "#262A34",
         
        },
        {
            rank: 6,
            name: "Lar********",
            days: 20,
            bgColor: "#262A34",
           
          },
          {
            rank: 7,
            name: "Lar********",
            days: 20,
            bgColor: "#262A34",
           
          },
      ];
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
             Stacking Pool
            </Text>
            <View style={{ flex: 1 }} />
            <View style={{ flexDirection: "row" }}>
              
                <Image
                              source={require("../../assets/icons/Token-Count.png")}
                              style={{ width: 78, height: 32, marginRight: 10 }}
                            />
                            <Image
                              source={require("../../assets/icons/Q & A.png")}
                              style={{ width: 28, height: 28 }}
                            />
             
            </View>
          </View>
          <ScrollView style={{ flex: 1, marginBottom: 60 }}>
            <View
              style={{
               
                marginTop: 20,
                marginBottom: 10,
              }}
            >
             <View style={styles.card}>
              <Image
                source={Icon1} // Replace with your icon URL
                style={styles.icon}
              />
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.title}>1,000,000</Text>
                  <Text style={styles.subText}>Total SSBT Staked Today</Text>
                </View>
                <View style={styles.amountContainer}>
                 
                </View>
              </View>
            </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 0 }}>
                <GradientCard2 />
              </View>

              <Text style={{ color: "#fff", fontSize: 24, fontFamily: "Lexend", fontWeight: "600", alignSelf: "flex-start", marginTop: 20, marginLeft: 20 }}>Become a Stakeholder</Text>

<View style={{alignItems:"center",marginTop:20}}> 
    <GradientButton title="PARTICIPATE IN STAKING POOL" icon={Piggy}  />

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
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#262A34", // Card background color
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 12,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  icon: {
    width: 42,
    height: 42,
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

export default StackingPool;
