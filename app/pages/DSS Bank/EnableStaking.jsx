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
  Switch,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";


const { width, height } = Dimensions.get("window");

export const EnableStacking = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value of 0
  const [activeTab, setActiveTab] = useState("Walk Mode");

  const [isAutoStackEnabled, setIsAutoStackEnabled] = useState(false);
  const [selectedDays, setSelectedDays] = useState("30 days");

  const toggleSwitch = () => setIsAutoStackEnabled((previousState) => !previousState);

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
              Enable Stacking
            </Text>
            <View style={{ flex: 1 }} />
            <View style={{ flexDirection: "row" }}></View>
          </View>
          <ScrollView style={{ flex: 1, marginBottom: 60, marginTop: 20 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 15,
              }}
            >
              <Image
                source={require("../../assets/images/EnableStacking.png")}
                style={{
                  width: width * 0.9,
                  height: 94,
                }}
              />
            </View>
            <View style={{ padding: 20 ,marginTop: 20 ,marginHorizontal: 20}}>
            <Text style={styles.title}>TOKEN STACK</Text>

{/* Input and Button */}
<View style={styles.inputContainer}>
  <Text style={styles.inputLabel}>Tokens</Text>
  <TouchableOpacity>
    <Text style={styles.buttonText}>STAKE ALL</Text>
  </TouchableOpacity>
</View>
<View style={styles.divider} />

{/* Card with Toggle */}
<View style={styles.card}>
  <View style={styles.cardContent}>
    <Text style={styles.cardText}>DO YOU WANT TO AUTO-STACK?</Text>
    <TouchableOpacity>
      <Image source={require("../../assets/icons/iIcon.png")} style={styles.infoIcon} />
    </TouchableOpacity>
  </View>
  <Switch
    trackColor={{ false: "#767577", true: "#1E90FF" }}
    thumbColor={isAutoStackEnabled ? "#ffffff" : "#f4f3f4"}
    onValueChange={toggleSwitch}
    value={isAutoStackEnabled}
  />
</View>
</View>
          
          <View style={{ padding: 20  ,marginHorizontal: 20}}>
          <Text style={styles.title}>STACKING DAYS</Text>

{/* Row of Buttons */}
<View style={styles.buttonRow}>
  {["30 days", "60 days", "120 days"].map((day) => (
    <TouchableOpacity
      key={day}
      style={[
        styles.dayButton,
        selectedDays === day && styles.selectedDayButton,
      ]}
      onPress={() => setSelectedDays(day)}
    >
      <Text
        style={[
          styles.dayButtonText,
          selectedDays === day && styles.selectedDayButtonText,
        ]}
      >
        {day}
      </Text>
    </TouchableOpacity>
  ))}
</View>

{/* Stack Button */}
<TouchableOpacity style={styles.stackButton}>
    <Image source={require("../../assets/icons/pepicons.png")} style={{width : 18 , height: 18,marginRight: 10}} />
  <Text style={styles.stackButtonText}>STACK</Text>
</TouchableOpacity>
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
  ssbCard: {
    backgroundColor: "#262A34",
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 15,
    alignItems: "center",

    marginHorizontal: 5,
  },
  ssbCardTitle: {
    color: "#727272",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Lexend",
  },
  ssbCardValue: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "left",
    alignSelf: "flex-start",
    marginTop: 6,
    fontFamily: "Lexend",
  },
  ssbContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: 20,
    marginHorizontal: 10,
  },
  title: {
    color: "#3A3D46",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 20,
    textTransform: "uppercase",
    fontFamily: "Lexend",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  inputLabel: {
    color: "#4C505D",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Lexend",
  },
  buttonText: {
    color: "#246BFD",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Lexend",
  },
  divider: {
    height: 1,
    backgroundColor: "#333333",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#262A34",
    borderRadius: 12,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "500",
    marginRight: 10,
    fontFamily: "Lexend",
  },
  infoIcon: {
    
   
    height: 20,
    width: 20,
  },
  title: {
    color: "#3A3D46",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 20,
    textTransform: "uppercase",
    fontFamily: "Lexend",
  },
  buttonRow: {
    flexDirection: "row",
    
    marginBottom: 30,
    gap: 10,
  },
  dayButton: {
    backgroundColor: "#1E1E2A",
    borderRadius: 24,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  selectedDayButton: {
    backgroundColor: "#1E90FF",
  },
  dayButtonText: {
    color: "#246BFD",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Lexend",
  },
  selectedDayButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  stackButton: {
    backgroundColor: "#246BFD",
    borderRadius: 24,
    paddingVertical: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  stackButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Lexend",
  },
});

export default EnableStacking;
