import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export const ChooseBlockChain = () => {
  const navigation = useNavigation();
  const handelBack = () => {
    navigation.goBack();
  };

  const handelTry = () => {
    navigation.navigate('LoginScreen');
    };
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value of 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Final opacity value of 1
      duration: 2000, // Duration of 2 seconds
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const packages = [
    { id: '1',  image: require('../../assets/images/Packages.png') },
    { id: '2', image: require('../../assets/images/Packages.png') },
    { id: '3', image: require('../../assets/images/Packages.png') },
  ];

  const renderPackage = ({ item }) => (
    <View style={styles.packageCard}>
      <Image source={item.image} style={styles.packageImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="#181A20" style="light" />

      {/* Background Gradient Images */}
      <View style={styles.topLeftGradient}>
        <Image
          source={require("../../assets/images/GradientTopLeft.png")}
          style={styles.gradientImage}
        />
      </View>

      <View style={styles.content}>
        <Animated.View style={{ opacity: fadeAnim }}>
          {/* Logo */}
          <View style={{ marginLeft: 0 }}>
                 
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 20 }}>
            <TouchableOpacity onPress={handelBack}>
              <Image
                source={require("../../assets/icons/leftIcon.png")} // Replace with your logo path
                style={styles.logo}
              />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="play-outline" size={24} color="#F78300" />
              <Text style={{ color: '#F78300', fontSize: 12, marginLeft: 5 ,fontFamily: "Lexend" }}>Watch Video</Text>
            </View>
          </View>


          <Text style={[styles.title ,{marginTop : 20}]}>Choose your</Text>
          <Text style={[styles.title, { marginBottom: 5 }]}>Blockchain</Text>
          </View>

          <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
            <View style={styles.infoCard}>
              <Image
                source={require('../../assets/images/infoIcon.png')}
                style={styles.infoImage}
              />
              <View style={styles.infoContent}>
                <Text style={styles.infoText}>Mine daily SSBTs based on the blockchain daily capacity,will split 50% Pool A and 50% Pool B for all blockchain owners.</Text>
              </View>
            </View>

            {/* Two Column Section */}
            <View style={styles.twoColumnCard}>
          <View style={styles.headerRow}>
            <Text style={styles.headerText}>Phase B <Text style={{color: '#727272'}}>(Current Active)</Text></Text>
            <Text style={styles.headerLink}>Know More</Text>
          </View>
         
          <View style={styles.columnsContainer}>
            <View style={styles.column}>
              <Text style={styles.columnText}>SSB Tokens Supply</Text>
              <Text style={styles.columnValue}>18,000,000 SSB</Text>
            </View>
            <View style={styles.dividerVertical} />
            <View style={styles.column}>
              <Text style={styles.columnText}>Token Exchange Price</Text>
              <Text style={styles.columnValue}>$0.05/SSB</Text>
            </View>
          </View>
            </View>

            {/* Package Scroller */}
            <FlatList
              horizontal
              data={packages}
              keyExtractor={(item) => item.id}
              renderItem={renderPackage}
              contentContainerStyle={styles.packageScroller}
            />
<TouchableOpacity style={styles.secondaryButton} onPress={handelTry}>
            
            <Text style={styles.secondaryButtonText}>OR START WITH FREE TRIAL</Text>
          </TouchableOpacity>

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
    bottom: -150,
    right: -100,
  },
  gradientImage: {
    resizeMode: "contain",
    opacity: 0.2,
  },
  content: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 0,
    textAlign: "left",
    letterSpacing: 1.5,
    marginLeft: 20,
    fontFamily: "Lexend",
    
  },
  scrollViewContent: {
    
    paddingBottom: 20,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#242731',
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
  },
  infoImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 20,
  },
  infoContent: {
    flex: 1,
  },
  infoText: {
    color: '#9C9EA3',
    fontSize: 10,
    
    lineHeight: 16,
    fontFamily: "Lexend",
  },
  twoColumnCard: {
    backgroundColor: 'transparent',
    marginTop: 20,
    borderRadius: 10,
    padding: 20,
    borderColor: '#727272',
    borderWidth: 1,
    paddingHorizontal: 20,
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: "Lexend",
  },
  headerLink: {
    color: '#53BFFD',
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: "Lexend",
  },
 
  columnsContainer: {
    flexDirection: 'row',
    
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  dividerVertical: {
    width: 1,
    backgroundColor: '#242731',
    marginHorizontal: 10,
  },
  columnText: {
    color: '#727272',
    fontSize: 12,
    marginBottom: 0,
    fontFamily: "Lexend",
  },
  columnValue: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    fontFamily: "Lexend",
  },
  packageScroller: {
    paddingHorizontal: 10,
  },
  packageCard: {
    width: width * 0.8,
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 20,
    alignItems: 'center',
  },
  packageImage: {
    width: 286,
    height: 578,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  packageDetails: {
    alignItems: 'center',
  },
  packageTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  packagePrice: {
    color: '#FFD700',
    fontSize: 14,
    marginTop: 5,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 12,
    borderRadius: 40,
    width: width * 0.75,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderColor: '#1877F2',
    borderWidth: 1,
  },
  secondaryButtonText: {
    color: '#246BFD',
    marginLeft: 10,
    fontSize: 12,
    fontFamily: "Lexend",
  },
});

export default ChooseBlockChain;