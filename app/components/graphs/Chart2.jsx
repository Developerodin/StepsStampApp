import { Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const Chart2 = () => {
  const barData = [
    {
      value: 25,
      label: "Stack Token",
      frontColor: "#53AAFF",
      spacing: 80,
      labelTextStyle: { color: "gray",fontSize:12 },
      topLabelComponent: () => (
        <View style={{ width: 70, alignItems: "center", marginBottom: 8 }}>
          <Text style={{ color: "#fff", fontSize: 11 }}>956.25 SSB</Text>
        </View>
      ),
    },
    { value: 45, label: "After Manual Stack", frontColor: "#A06AF9", spacing: 80,
        labelTextStyle: { color: "gray",fontSize:12 },
        topLabelComponent: () => (
          <View style={{ width: 70, alignItems: "center", marginBottom: 8 }}>
            <Text style={{ color: "#fff", fontSize: 11 }}>2.6K SSB</Text>
          </View>
        ),
     },
    { value:80, label: "After Auto-Stack", frontColor: "#FBA3FF", spacing: 80,
        labelTextStyle: { color: "gray",fontSize:12 },
        topLabelComponent: () => (
          <View style={{ width: 70, alignItems: "center", marginBottom: 8 }}>
            <Text style={{ color: "#fff", fontSize: 11 }}>3.6K SSB</Text>
          </View>
        ),
     },
  ];
  return (
    <View style={{ padding: 20, backgroundColor: "#262A34", borderRadius: 20 }}>
      <BarChart
        roundedTop
        barWidth={40}
        showFractionalValue
        showYAxisIndices
        noOfSections={4}
        maxValue={100}
        data={barData}
        isAnimated
        xAxisThickness={0}
        yAxisThickness={0}
        yAxisIndicesWidth={0}
        hideRules
        hideYAxisText
      />
    </View>
  );
};

export default Chart2;
