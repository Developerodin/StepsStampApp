import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AutoStackingCard() {
    const navigation = useNavigation();

    const handleStacking = () => {
        navigation.navigate("StackingAnalysis");
        };

  return (
    <View style={styles.card}>
      {/* Top Section */}
      <View style={styles.topSection}>
        {/* Left Side */}
        <View style={styles.leftSection}>
          <Image
            source={require("../../assets/icons/calender.png")} // Replace with your icon
            style={styles.icon}
          />
          <View>
            <Text style={styles.title}>30-Days Auto-Stacking</Text>
            <Text style={styles.subText}>Ends by 31 Nov 2024, 12:00 AM</Text>
          </View>
        </View>

        {/* Right Side */}
        <View style={styles.rightSection}>
          <Text style={styles.coins}>+828 SSBTs</Text>
          <View style={styles.percentageContainer}>
            <Text style={styles.percentage}>16.0%</Text>
            <Image
              source={require("../../assets/icons/up-arrow.png")} // Replace with your icon
              style={styles.arrowIcon}
            />
          </View>
        </View>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleStacking}>
          <Image
            source={require("../../assets/icons/analysis-icon.png")} // Replace with your icon
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>ANALYSIS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("../../assets/icons/update-icon.png")} // Replace with your icon
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>UPDATE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("../../assets/icons/stake-more-icon.png")} // Replace with your icon
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>STAKE MORE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#262A34",
    borderRadius: 10,
    padding: 16,
    margin: 20,
    
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    fontFamily:"Lexend"
  },
  subText: {
    fontSize: 12,
    color: "#9C9EA3",
    marginTop: 4,
    fontFamily:"Lexend"
  },
  rightSection: {
    alignItems: "flex-end",
  },
  coins: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    fontFamily:"Lexend"
  },
  percentageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  percentage: {
    fontSize: 12,
    color: "#008000",
    marginRight: 4,
    fontFamily:"Lexend"
  },
  arrowIcon: {
    width: 18,
    height: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginHorizontal: -8,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#246BFD",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  buttonIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  buttonText: {
    fontSize: 12,
    color: "#246BFD",
    fontWeight: "600",
    fontFamily:"Lexend"
  },
});
