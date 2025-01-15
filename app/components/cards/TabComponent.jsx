import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image ,Dimensions } from "react-native";
import GraphImage from "../../assets/images/Graph.png";
const { width, height } = Dimensions.get("window");
const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("Day");

  const renderContent = () => {
    switch (activeTab) {
      case "Day":
        return <Image source={GraphImage} style={styles.image} />;
      case "Week":
        return <Image source={GraphImage} style={styles.image} />;
      case "Month":
        return <Image source={GraphImage} style={styles.image} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Day" && styles.activeTab]}
          onPress={() => setActiveTab("Day")}
        >
          <Text style={[styles.tabText, activeTab === "Day" && styles.activeTabText]}>Day</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Week" && styles.activeTab]}
          onPress={() => setActiveTab("Week")}
        >
          <Text style={[styles.tabText, activeTab === "Week" && styles.activeTabText]}>Week</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Month" && styles.activeTab]}
          onPress={() => setActiveTab("Month")}
        >
          <Text style={[styles.tabText, activeTab === "Month" && styles.activeTabText]}>Month</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>{renderContent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 16,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#7E7E7E",
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 0,
  },
  activeTab: {
    borderBottomColor: "#246BFD",
  },
  tabText: {
    color: "#7E7E7E",
    fontSize: 16,
    fontFamily: "Lexend",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "600",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    
    width: width * 0.9,
    height: height * 0.2,
    resizeMode: "contain",

  },
});

export default TabComponent;