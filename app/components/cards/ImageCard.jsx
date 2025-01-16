import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // For the "more" icon
import BlockChain from "../../assets/images/CardImage.png";

const ImageCard = ({ title, price, blocks }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={BlockChain} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price} {blocks}</Text>
      </View>
      <TouchableOpacity style={styles.iconContainer}>
        <MaterialIcons name="more-vert" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#262A34",
    borderRadius: 12,
    overflow: "hidden",
    width: "48%",
    position: "relative",
    padding: 10, // Add padding to create a gap around the image
  },
  imageContainer: {
    width: "100%",
    height: 138,
    overflow: "hidden",
    alignSelf: "center",
    borderRadius: 12, // Apply borderRadius to the container
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 5, // Apply borderRadius to the image
  },
  detailsContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  price: {
    fontSize: 12,
    color: "#C0C0C0",
    marginTop: 2,
  },
  blocks: {
    fontSize: 12,
    color: "#C0C0C0",
    marginTop: 2,
  },
  iconContainer: {
    position: "absolute",
    bottom: 10,
    right: 5,
  },
});

export default ImageCard;