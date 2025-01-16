import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
  FlatList
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomCalendar from "../../components/Calender/CustomCalendar";

const centerItemHeight = 70;
const { width, height } = Dimensions.get("window");

export const Calender = () => {
  const navigation = useNavigation();
  const handelBack = () => {
    navigation.goBack();
  };
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value of 0
  const [isFocused, setIsFocused] = useState(false);

  const handleDateChange = (date) => {
    console.log("Selected Date:", date); // { day: 28, month: 8, year: 1995 }
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Final opacity value of 1
      duration: 2000, // Duration of 2 seconds
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);


  const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();
  
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);
  
    

    const handelSave =()=>{
      console.log("Selcted ==>",selectedDay,selectedMonth,selectedYear);
      navigation.navigate("ChooseBlockChain")
    }
     // Height for each item in FlatList
  
     const days = Array.from({ length: 100 }, (_, i) => (i % 31) + 1);
     const months = Array.from({ length: 100 }, (_, i) => (i % 12) + 1); // Loop through 1 to 12 repeatedly until the length is 100
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  
    const daysLoop = [...days]; // Duplicate days for looping
    const monthsLoop = [...months]; // Duplicate months for looping
    
    const daysRef = useRef(null);
    const monthsRef = useRef(null);
    const yearsRef = useRef(null);
  
    useEffect(() => {
      // Center the lists at the middle when the component loads
      setTimeout(() => {
        daysRef.current.scrollToOffset({
          offset: centerItemHeight * days.length,
          animated: false,
        });
        monthsRef.current.scrollToOffset({
          offset: centerItemHeight * months.length,
          animated: false,
        });
      },10);
    }, []);
  
    const handleScroll = (e, data, setSelected, flatListRef, loopData) => {
      const offsetY = e.nativeEvent.contentOffset.y;
      const adjustedOffsetY = offsetY + height * 0.1 - centerItemHeight / 2; // Adjust based on centerLine position
      const index = Math.round(adjustedOffsetY / centerItemHeight);
      const totalItems = data.length;
      const middleIndex = Math.floor(loopData.length / 2);
    
      // Get the actual value from the data array
      const actualIndex = index % totalItems;
      const selectedValue = data[actualIndex >= 0 ? actualIndex : totalItems + actualIndex];
       console.log("Selected ===>", selectedValue)
      setSelected(selectedValue);
    
      // Reset the scroll to keep it in the loop's center
      if (index < middleIndex - totalItems / 2 || index > middleIndex + totalItems / 2) {
        flatListRef.current.scrollToOffset({
          offset: centerItemHeight * (middleIndex + actualIndex - totalItems / 2),
          animated: false,
        });
      }
    };
    
  
    const renderItem = (item, selected) => {
      const isSelected = item === selected;
      return (
        <View style={styles.itemContainer}>
          <Text style={[styles.itemText, isSelected && styles.selectedText]}>
            {item < 10 ? `0${item}` : item}
          </Text>
        </View>
      );
    };

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
      {/* <View style={styles.bottomRightGradient}>
        <Image
          source={require('../../assets/images/GradientBottomRight.png')}
          style={styles.gradientImage}
        />
      </View> */}

      {/* Main Content */}
      <View style={styles.content}>
        <Animated.View style={{ opacity: fadeAnim }}>
          {/* Logo */}
          <TouchableOpacity onPress={handelBack}>
            <Image
              source={require("../../assets/icons/leftIcon.png")} // Replace with your logo path
              style={styles.logo}
            />
          </TouchableOpacity>

          {/* Title */}
          <Text style={styles.title}>When were</Text>
          <Text style={[styles.title, { marginBottom: 0 }]}>you Born?</Text>

          <View style={{ marginTop: 30 }}>

            {/* Date Picker Container */}
                  <View style={styles.pickerContainer}>
                    {/* Days */}
                    <View style={styles.pickerColumn}>
                      <FlatList
                        data={daysLoop}
                        keyExtractor={(item, index) => `${item}-${index}`}
                        renderItem={({ item }) => renderItem(item, selectedDay)}
                        onMomentumScrollEnd={(e) =>
                          handleScroll(e, days, setSelectedDay, daysRef, daysLoop)
                        }
                        ref={daysRef}
                        showsVerticalScrollIndicator={false}
                        snapToInterval={centerItemHeight}
                        decelerationRate="fast"
                        contentContainerStyle={styles.listContainer}
                      />
                    </View>
            
                    {/* Months */}
                    <View style={styles.pickerColumn}>
                      <FlatList
                        data={monthsLoop}
                        keyExtractor={(item, index) => `${item}-${index}`}
                        renderItem={({ item }) => renderItem(item, selectedMonth)}
                        onMomentumScrollEnd={(e) =>
                          handleScroll(e, months, setSelectedMonth, monthsRef, monthsLoop)
                        }
                        ref={monthsRef}
                        showsVerticalScrollIndicator={false}
                        snapToInterval={centerItemHeight}
                        decelerationRate="fast"
                        contentContainerStyle={styles.listContainer}
                      />
                    </View>
            
                    {/* Years */}
                    <View style={styles.pickerColumn}>
                      <FlatList
                        data={years}
                        keyExtractor={(item) => item.toString()}
                        renderItem={({ item }) => renderItem(item, selectedYear)}
                        onMomentumScrollEnd={(e) =>
                          handleScroll(e, years, setSelectedYear, yearsRef, years)
                        }
                        ref={yearsRef}
                        showsVerticalScrollIndicator={false}
                        snapToInterval={centerItemHeight}
                        decelerationRate="fast"
                        contentContainerStyle={styles.listContainer}
                      />
                    </View>
            
                    {/* Center Lines */}
                    <View style={styles.centerLineTop} />
                    <View style={styles.centerLineBottom} />
                  </View>
            
                  {/* Save Button */}
                  
          </View>
          <View style={{marginTop:20,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
          <TouchableOpacity onPress={handelSave} style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>SAVE & CONTINUE</Text>
                  </TouchableOpacity>
          </View>
          
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
    // marginTop: 110,
    // alignItems: "center",
    // justifyContent: "center",
    // paddingHorizontal: 20,
    // marginLeft: 15,
    margin:20,
    marginTop:40,
    
  },
  logo: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 0,
    textAlign: "left",
    letterSpacing: 1.5,
    fontFamily: "Lexend",
  },
  inputLabel: {
    color: "#3A3D46",
    fontSize: 12,
    marginBottom: 0,
    alignSelf: "flex-start",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
  },
  input: {
    flex: 1,
    color: "#3A3D46",
    fontSize: 14,
    padding: 10,
    fontWeight: "600",
  },
  resendText: {
    marginTop: 0,
    textAlign: "flex-start",
    color: "#3A3D46",
    marginLeft: 10,
  },
  resendLink: {
    color: "#35ABFF",
    fontWeight: "bold",
  },
  primaryButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2e65ff",
    paddingVertical: 15,
    borderRadius: 40,
    justifyContent: "center",
    marginBottom: 20,
    width: width * 0.75,
    alignSelf: "center",
    marginTop: 30,
  },
  buttonIcon: {
    marginRight: 10,
  },
  primaryButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    height: height * 0.6,
    position: "relative",
  },
  pickerColumn: {
    flex: 1,
    alignItems: "center",
  },
  listContainer: {
    paddingVertical: height * 0.2,
  },
  itemContainer: {
    height: centerItemHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    color: "#808080",
    fontSize: 16,
  },
  selectedText: {
    color: "#FFA500",
    fontSize: 34,
    fontWeight: "bold",
  },
  centerLineTop: {
    position: "absolute",
    top: height * 0.3 - 38,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "#007BFF",
  },
  centerLineBottom: {
    position: "absolute",
    top: height * 0.3 + 45,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "#007BFF",
  },
  saveButton: {
    backgroundColor: "#2e65ff",
    paddingVertical: 12,
    borderRadius: 40,
    width: width * 0.75,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Lexend",
  },
});

export default Calender;
