import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import Modal from "react-native-modal";
const { width ,height } = Dimensions.get("window");
const filtersData = {
  Month: ["Jan 2024", "Feb 2024", "Mar 2024", "Apr 2024"],
  Type: ["SSB", "USDT", "Blockchain"],
  Status: ["Complete", "Failed"],
  Category: ["Deposit", "Withdrawal"],
};

const FilterModal = ({ isVisible, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState("Month");
  const [selectedFilters, setSelectedFilters] = useState({
    Month: [],
    Type: [],
    Status: [],
    Category: [],
  });

  const toggleFilter = (category, item) => {
    const isSelected = selectedFilters[category]?.includes(item);
    const updatedFilters = isSelected
      ? selectedFilters[category].filter((filter) => filter !== item)
      : [...(selectedFilters[category] || []), item];
    setSelectedFilters({
      ...selectedFilters,
      [category]: updatedFilters,
    });
  };

  const renderSidebar = () => (
    <View style={styles.sidebar}>
      {Object.keys(filtersData).map((category) => (
        <TouchableOpacity
          key={category}
          style={[
            styles.sidebarItem,
            selectedCategory === category && styles.sidebarItemActive,
          ]}
          onPress={() => setSelectedCategory(category)}
        >
          <Text
            style={[
              styles.sidebarText,
              selectedCategory === category && styles.sidebarTextActive,
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderFilterList = () => (
    <View style={styles.filterList}>
      <TouchableOpacity
        style={styles.selectAllContainer}
        onPress={() =>
          setSelectedFilters({
            ...selectedFilters,
            [selectedCategory]: selectedFilters[selectedCategory].length ===
              filtersData[selectedCategory].length
              ? []
              : filtersData[selectedCategory],
          })
        }
      >
        <Text style={styles.filterText}>Select all</Text>
        <View
          style={[
            styles.checkbox,
            selectedFilters[selectedCategory].length ===
              filtersData[selectedCategory].length && styles.checkboxSelected,
          ]}
        />
      </TouchableOpacity>
      <FlatList
        data={filtersData[selectedCategory]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.filterItem}
            onPress={() => toggleFilter(selectedCategory, item)}
          >
            <Text style={styles.filterText}>{item}</Text>
            <View
              style={[
                styles.checkbox,
                selectedFilters[selectedCategory]?.includes(item) &&
                  styles.checkboxSelected,
              ]}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection="up"
      style={styles.modal}
      animationIn="slideInDown"
      animationOut="slideOutUp"
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Filters</Text>
          <TouchableOpacity onPress={() => setSelectedFilters({})}>
            <Text style={styles.clearText}>CLEAR ALL</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {renderSidebar()}
          {renderFilterList()}
        </View>

        <View style={{paddingTop: 20,borderTopWidth: 1.5,
    borderTopColor: "#2A2A3C",}}>
        <TouchableOpacity style={styles.applyButton} onPress={onClose}>
          <Text style={styles.applyButtonText}>APPLY</Text>
        </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: "flex-start", // Align the modal at the top
  },
  container: {
    backgroundColor: "#262A34",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingTop: 20,
    height: height * 0.42, 
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1.5,
    borderBottomColor: "#2A2A3C",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  clearText: {
    color: "#007BFF",
    marginRight: 16,
  },
  closeText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  content: {
    flexDirection: "row",
    flex: 1,
  },
  sidebar: {
    width: 100,
    backgroundColor: "#262A34",
    borderRightWidth: 1.5,
    borderRightColor: "#2A2A3C",
  },
  sidebarItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1.5,
    borderBottomColor: "#2A2A3C",
  },
  sidebarItemActive: {
    backgroundColor: "#2B3A5A",
  },
  sidebarText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  sidebarTextActive: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  filterList: {
    flex: 1,
    padding: 16,
  },
  filterItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  filterText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
  checkboxSelected: {
    backgroundColor: "#007BFF",
  },
  selectAllContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  applyButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    alignItems: "center",
    width: "70%",
    alignSelf: "center",
    borderRadius: 40,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  applyButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FilterModal;
