import { useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

const Chart3 = () => {
    const ref = useRef(null)
    const customDataPoint = () => {
        return (
            <View
            style={{
                width: 20,
                height: 20,
                backgroundColor: 'white',
                borderWidth: 4,
                borderRadius: 10,
                borderColor: '#07BAD1',
            }}
            />
        );
    };
    const customLabel = (val1,val2) => {
        return (
            <View style={{width: 50,height:40,marginLeft:15,alignItems:"center"}}>
                <Text style={{color: '#939393'}}>{val1}</Text>
                <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>{val2}</Text>
            </View>
        );
    };
    const dataPointLabelComponent= () => {
        return (
            <View
            style={{
                backgroundColor: 'black',
                paddingHorizontal: 8,
                paddingVertical: 5,
                borderRadius: 4,
            }}>
            <Text style={{color: 'white'}}>410</Text>
            </View>
        );
        }
        const lineData = [
            
            {value: 14, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('Jan','10')},
            {value: 8, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('Jan','20')},
            {value: 38, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('Jan','30')},
            {value: 36, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('Feb','1')},
            {value: 28, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('Feb','10')},
            {value: 14, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('Feb','20')},
            {value: 28, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('Feb','28')},
            {value: 4, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('Mar','1')},
            {value: 14, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('Mar','10')},
            {value: 8, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('Mar','20')},
            {value: 14, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('Mar','30')},
            {value: 8, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('Apr','1')},
            {value: 38, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('Apr','10')},
            {value: 14, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('Apr','20')},
            {value: 28, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('Apr','30')},
            {value: 4, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('May','1')},
            {value: 10, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('May','10')},
            {value: 8, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('May','20')},
            {value: 14, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('May','30')},
            {value: 8, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('Jun','1')},
            {value: 38, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('Jun','10')},
            {value: 14, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('Jun','20')},
            {value: 28, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('Jun','30')},
            {value: 4, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('Jul','1')},
            {value: 28, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('Jul','10')},
            {value: 4, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('Jul','20')},
            {value: 14, labelTextStyle: {color: 'gray'}, labelComponent: () => customLabel('Jul','30')},
        ];
        
    
      const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul']
    
      const showOrHidePointer = (ind) => {
        ref.current?.scrollTo({
        x: ind*200 - 25}); // adjust as per your UI
      };
    
      return (
        <View style={{width:"90%",overflow:"hidden",backgroundColor: '#262A34',borderRadius:20,padding:20,paddingBottom:40}}>
          <View style={{flexDirection: 'row', marginLeft: 8,marginBottom:30}}>
            {months.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    padding: 6,
                    margin: 4,
                    backgroundColor: '#151F38',
                    borderRadius: 8,
                  }}
                  onPress={() => showOrHidePointer(index)}>
                  <Text style={{color:"#35ABFF"}}>{months[index]}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
            <LineChart
           
              scrollRef={ref}
              data={lineData}
              curved
              initialSpacing={5}
              hideRules
            //   hideDataPoints
              thickness={3}
              rulesColor
              yAxisColor="lightgray"
          xAxisColor="lightgray"
          color="#35ABFE"
          yAxisTextStyle={{color: '#737C88'}}
          xAxisTextStyle={{color: '#fff'}}
          startFillColor={'rgba(20, 89, 245, 0.29) 24.06%'}
          endFillColor={'rgba(20, 89, 245, 0.00) 99.92%'}
          startOpacity={0.4}
          endOpacity={0.1}
          spacing={70}
          maxValue={50}
          noOfSections={5}
          areaChart
          xAxisThickness={0}
        yAxisThickness={1}
        //   dataPointsHeight={20}
        //     dataPointsWidth={20}
            />
        </View>
      );
    }


export default Chart3