import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const ITEM_HEIGHT = 60;

const CustomCalendar = ({ onDateChange }) => {
    const navigation = useNavigation();
    const handelSave = () => {
        navigation.navigate('ChooseBlockChain');
    };
  const currentYear = new Date().getFullYear();

  // Generate arrays for days, months, and years
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const handleDayChange = (day) => {
    setSelectedDay(day);
    onDateChange?.({ day, month: selectedMonth, year: selectedYear });
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    onDateChange?.({ day: selectedDay, month, year: selectedYear });
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    onDateChange?.({ day: selectedDay, month: selectedMonth, year });
  };

  const handleScroll = (event, data, setSelected) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    
    // Adjust for the new top position of linesContainer
    const containerTop = (height - ITEM_HEIGHT * 1.8) / 3;
  
    // Calculate the center index based on the scroll position
    const centerOffset = offsetY - containerTop;  // Subtract the container's top offset
    const centerIndex = Math.round(centerOffset / ITEM_HEIGHT);  // Divide by ITEM_HEIGHT to get the index
  
    // Get the item at the calculated center index
    const item = data[centerIndex];
  
    if (item) {
      setSelected(item); // Update the selected state
      onDateChange?.({ day: selectedDay, month: selectedMonth, year: selectedYear });
    }
  };

 

  const renderItem = (item, selectedValue, onPress) => (
    <TouchableOpacity onPress={() => onPress(item)}>
      <Text
        style={[
          styles.itemText,
          selectedValue === item && styles.selectedItemText,
        ]}
      >
        {item < 10 ? `0${item}` : item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.linesContainer}>
        <View style={styles.line} />
        <View style={styles.line} />
      </View>
      <View style={styles.pickerContainer}>
        {/* Days */}
        <FlatList
  data={days}
  keyExtractor={(item) => item.toString()}
  renderItem={({ item }) => renderItem(item, selectedDay, handleDayChange)}
  horizontal={false}
  showsVerticalScrollIndicator={false}
  contentContainerStyle={styles.list}
  getItemLayout={(data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  })}
  initialScrollIndex={selectedDay - 1}
  onScroll={(event) => handleScroll(event, days, setSelectedDay)}
  onMomentumScrollEnd={(event) => handleScroll(event, days, setSelectedDay)}
  snapToInterval={ITEM_HEIGHT} // Ensure the list snaps to item positions
  decelerationRate="fast" // Smooth scrolling
/>

        {/* Months */}
        <FlatList
          data={months}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) =>
            renderItem(item, selectedMonth, handleMonthChange)
          }
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
          initialScrollIndex={selectedMonth - 1}
          
        />

        {/* Years */}
        <FlatList
          data={years}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) =>
            renderItem(item, selectedYear, handleYearChange)
          }
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
          initialScrollIndex={years.indexOf(selectedYear)}
          
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handelSave}>
        <Text style={styles.saveButtonText}>SAVE & CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 20,
    alignItems: "center",
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 400,
    marginTop: 20,
  },
  list: {
    alignItems: "center",
  },
  itemText: {
    fontSize: 18,
    color: "#424242",
    paddingVertical: 10,
    textAlign: "center",
    height: ITEM_HEIGHT,
    lineHeight: ITEM_HEIGHT,
  },
  selectedItemText: {
    color: "#F78300",
    fontWeight: "bold",
    fontSize: 24,
  },
  linesContainer: {
    position: "absolute",
    top: (height - ITEM_HEIGHT * 1.8) / 3,
    left: 0,
    right: 0,
    height: ITEM_HEIGHT * 0.9,
    justifyContent: "space-between",
    alignItems: "center",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#35ABFF",
  },
  saveButton: {
    backgroundColor: "#2e65ff",
    paddingVertical: 12,
    borderRadius: 40,
    width: width * 0.75,
    marginTop: 30,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Lexend",
  },
});

export default CustomCalendar;