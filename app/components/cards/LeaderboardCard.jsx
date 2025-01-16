import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import ProfileImage from "../../assets/icons/ProfileImage.png";

const LeaderboardCard = ({ rank, name, days, bgColor }) => {
  return (
    <View style={[styles.card, { backgroundColor: bgColor }]}>
      <View style={styles.leftSection}>
        <Text style={[styles.rank, rank <= 3 && styles.rankTop]}>{rank}</Text>
        <Image source={ProfileImage} style={styles.profileImage} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <Text style={styles.days}>{days} days</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
      },
      leftSection: {
        flexDirection: "row",
        alignItems: "center",
      },
      rank: {
        fontSize: 18,
        color: "#FFFFFF",
        
        marginRight: 8,
        fontFamily: "Lexend",
      },
      rankTop: {
        fontSize: 20,
        color: "#FFFFFF",
        fontFamily: "Lexend",
      },
      profileImage: {
        width: 32,
        height: 32,
        
        marginRight: 12,
        marginLeft: 20,
      },
      name: {
        fontSize: 16,
        color: "#FFFFFF",
        fontFamily: "Lexend",
      },
      days: {
        fontSize: 16,
        color: "#FFFFFF",
        fontFamily: "Lexend",
      },
    });


export default LeaderboardCard;    
