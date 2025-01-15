import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  Animated,
  Button,
  TouchableOpacity,
} from "react-native";
import NextButton from "./NextButton";
import { StatusBar } from "expo-status-bar";
import Slide1 from "../../../assets/images/slide1.png";
import Slide2 from "../../../assets/images/slide2.png";
import Slide3 from "../../../assets/images/slide3.png";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Zocial } from "@expo/vector-icons";

const slides = [
  {
    id: 1,
    title: "Turn Every Step Into Progress",
    title2: "",
    description:
      'Track your daily steps effortlessly with our advanced fitness tracker. Every move you make not only keeps you healthy but also powers your journey toward exciting rewards!"',
    image: Slide1,
  },
  {
    id: 2,
    title: "Fitness Meets Financial Rewards",
    title2: "",
    description:
      "Convert your steps into valuable tokens effortlessly. Each step is a step closer to financial freedom. Start building wealth while achieving your fitness goals.",
    image: Slide2,
  },
  {
    id: 3,
    title: "Long Term Returns on Every Step",
    title2: "",
    description:
      "Invest your earned tokens in blockchain-powered assets. Watch your rewards grow with healthy, sustainable returns while you stay motivated and active.",
    image: Slide3,
  },
];

const { width, height } = Dimensions.get("window");

const IMAGE_ASPECT_RATIO = 260 / (width * 0.9);

export const AppSlides = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log("Last slide");
      navigation.navigate("Guide");
      // getDeviceDimensions()
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      slidesRef.current.scrollToIndex({ index: currentIndex - 1 });
    } else {
      console.log("First slide");
    }
  };

  const handelSkip = () => {
    navigation.navigate("Guide");
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Final opacity value of 1
      duration: 2000, // Duration of 2 seconds
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const renderItem = ({ item }) => (
    <View style={[styles.slide, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { resizeMode: "contain" }]}
      />
    </View>
  );

  const Paginator = ({ data, scrollX }) => {
    return (
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        {data &&
          data.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

            const dotWidth = scrollX.interpolate({
              inputRange,
              outputRange: [5, 25, 5], // Active dot will have a width of 20, others 10
              extrapolate: "clamp",
            });

            const backgroundColor = scrollX.interpolate({
              inputRange,
              outputRange: ["white", "#246BFD", "white"], // Active dot is blue, others white
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                key={i.toString()}
                style={[
                  styles.dot,
                  {
                    width: dotWidth,
                    backgroundColor,
                  },
                ]}
              />
            );
          })}
      </View>
    );
  };

  const activeSlide = slides[currentIndex];

  useEffect(() => {
    console.log("Index active ==>", currentIndex);
  }, [currentIndex]);

  const getDeviceDimensions = () => {
    // or 'screen' for full screen dimensions
    console.log(width, height);
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="#181A20" style="light" />

      <View style={styles.topLeftGradient}>
        <Image
          source={require("../../../assets/images/GradientTopLeft.png")}
          style={styles.gradientImage}
        />
      </View>
      <View style={styles.bottomRightGradient}>
        <Image
          source={require("../../../assets/images/GradientCenter.png")}
          style={{ width: 93, height: 93, resizeMode: "contain", opacity: 0.4 }}
        />
      </View>
      <View style={[{ flex: 1, position: "relative" }]}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginTop: 40,
            }}
          >
            {currentIndex > 0 && (
              <TouchableOpacity onPress={handleBack} style={{ marginLeft: 20 }}>
                <Image
                  source={require("../../../assets/icons/leftIcon.png")} // Replace with your logo path
                  style={{ width: 25, height: 25, resizeMode: "contain" }}
                />
              </TouchableOpacity>
            )}
            <View style={{ flex: 1 }} />
            {(currentIndex === 0 || currentIndex === 1) && (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 20,
                }}
              >
                <TouchableOpacity onPress={handelSkip}>
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 18,
                      marginLeft: 5,
                      fontFamily: "Lexend",
                    }}
                  >
                    Skip
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={{ flex: 0.75 }}>
            <FlatList
              data={slides}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              bounces={false}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
              onViewableItemsChanged={viewableItemsChanged}
              viewabilityConfig={viewConfig}
              ref={slidesRef}
            />
          </View>
        </Animated.View>

        <View style={styles.cardBackgroundContainer}>
          <Image
            source={require("../../../assets/images/SlidesBg.png")} // Ensure path is correct for the card background
            style={styles.cardBackgroundImage}
            resizeMode="contain"
          />

          {/* Centered section */}
          <View
            style={{
              position: "absolute",
              width: width * 0.9,
              // borderWidth: 1,
              // borderColor: '#fff',
              alignItems: "center",
              justifyContent: "center", // This centers the inner content vertically
              height: "100%", // Takes the height of the parent container
            }}
          >
            <View
              style={{
                // borderWidth: 1,
                // borderColor: '#fff',
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.title}>{activeSlide.title}</Text>
              {/* <Text style={styles.title}>{activeSlide.title2}</Text> */}
              <Text style={[styles.description, { marginTop: 15 }]}>
                {activeSlide.description}
              </Text>
            </View>
          </View>

          {/* Paginator */}
          <View style={{ position: "absolute", top: 20 }}>
            <Paginator data={slides} scrollX={scrollX} />
          </View>
        </View>

        <View
          style={{
            position: "absolute",
            bottom: 32,
            left: 0,
            right: 0,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <NextButton
            scrollTo={scrollTo}
            percentage={(currentIndex + 1) * (100 / slides.length)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  content: {},
  slide: {
    marginTop: 0,

    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 320,
    height: 280,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    fontFamily: "Lexend",
    color: "#ffff",
    textAlign: "center",
    letterSpacing: 1,
  },
  description: {
    fontWeight: "300",
    fontSize: 12,
    textAlign: "center",
    color: "#FFFFFF",
    paddingHorizontal: 24,
    lineHeight: 20,
    letterSpacing: 1,
    fontFamily: "Lexend",
  },
  dot: {
    height: 5,
    borderRadius: 50,
    marginHorizontal: 3,
  },
  cardBackgroundContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 60,
    width: "100%",
    height: height * 0.33,
    // borderWidth:1,
    // borderColor:'#ffff'
  },
  cardBackgroundImage: {
    height: height * 0.33, // Dynamic height
    width: width * 0.95, // Dynamic width
    resizeMode: "contain", // Ensure proper scaling
    // borderWidth:1,
    // borderColor:'red'
  },
});
