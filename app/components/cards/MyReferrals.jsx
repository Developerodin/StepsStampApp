import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import ProfileImage from "../../assets/icons/ProfileImage.png";

const referrals = [
  {
    id: "1",
    name: "Lar******",
    time: "12:30 AM",
    date: "25-11-2024",
    badge: require("../../assets/images/White.png"), // Replace with your image paths
  },
  {
    id: "2",
    name: "Lar******",
    time: "12:30 AM",
    date: "25-11-2024",
    badge: require("../../assets/images/Gold.png"),
  },
  {
    id: "3",
    name: "Lar******",
    time: "12:30 AM",
    date: "25-11-2024",
    badge: require("../../assets/images/White.png"),
  },
  {
    id: "4",
    name: "Lar******",
    time: "12:30 AM",
    date: "25-11-2024",
    badge: require("../../assets/images/Silver.png"),
  },
];

export default function MyReferrals() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.leftSection}>
        <Image
          source={ProfileImage} // Replace with your profile image path
          style={styles.profileIcon}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.dateTime}>
            {item.time}, {item.date}
          </Text>
        </View>
      </View>
      <Image source={item.badge} style={styles.badgeIcon} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Referrals</Text>
      <FlatList
        data={referrals}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    
    paddingTop: 20,
    marginHorizontal: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 20,
    fontFamily: "Lexend",
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#2A2A38",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 12,
  },
  textContainer: {
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    fontFamily: "Lexend",
  },
  dateTime: {
    fontSize: 14,
    color: "#9C9EA3",
    marginTop: 4,
    fontFamily: "Lexend",
  },
  badgeIcon: {
    width: 38,
    height: 35,
  },
});
