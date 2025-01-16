import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");
const centerItemHeight = 70;
const CustomCalendar = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();

  const [selectedDay, setSelectedDay] = useState(currentDay);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  
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
      {/* Title */}
      <Text style={styles.title}>When were you born?</Text>

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
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>SAVE & CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
    paddingTop: 50,
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    marginBottom: 20,
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
  buttonContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "#007BFF",
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
});

export default CustomCalendar;
