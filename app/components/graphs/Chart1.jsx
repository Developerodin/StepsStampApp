import React from "react";
import { Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const Chart1 = () => {
    const barData = [
        {
          value: 40,
          label: 'M',
          spacing:10,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#A06AF9',
          
          topLabelComponent: () => <Text style={{height:20,width:20,color: '#fff', fontSize:9}}>1.2K</Text>
          
        },
        {value: 20, frontColor: '#F78300',topLabelComponent: () => <Text style={{height:20,width:20,color: '#fff', fontSize:9}}>500</Text>},
        
        {
          value: 50,
          label: 'T',
          spacing:10,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#A06AF9'
          ,topLabelComponent: () => <Text style={{height:20,width:20,color: '#fff', fontSize:9}}>1K</Text>
        },
        {value: 40, frontColor: '#F78300',topLabelComponent: () => <Text style={{height:20,width:20,color: '#fff', fontSize:9}}>500</Text>},
        {
          value: 60,
          label: 'W',
          spacing:10,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#A06AF9'
          ,topLabelComponent: () => <Text style={{height:20,width:20,color: '#fff', fontSize:9}}>1.4K</Text>
        },
        {value: 25, frontColor: '#F78300',topLabelComponent: () => <Text style={{height:20,width:20,color: '#fff', fontSize:9}}>300</Text>},
        {
          value: 30,
          label: 'T',
          spacing:10,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#A06AF9',
          topLabelComponent: () => <Text style={{height:20,width:20,color: '#fff', fontSize:9}}>1K</Text>
        },
        {value: 20, frontColor: '#F78300',topLabelComponent: () => <Text style={{height:20,width:20,color: '#fff', fontSize:9}}>800</Text>},
        {
          value: 50,
          label: 'F',
          spacing:10,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#A06AF9',
          topLabelComponent: () => <Text style={{height:20,width:20,color: '#fff', fontSize:9}}>1.2K</Text>
        },
        {value: 40, frontColor: '#F78300',topLabelComponent: () => <Text style={{height:20,width:20,color: '#fff', fontSize:9}}>500</Text>},
        {
          value: 35,
          label: 'S',
          spacing: 10,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#A06AF9',
          topLabelComponent: () => <Text style={{height:20,width:20,color: '#fff', fontSize:9}}>1K</Text>
        },
        {value: 30, frontColor: '#F78300',topLabelComponent: () => <Text style={{height:20,width:20,color: '#fff', fontSize:9}}>300</Text>},

        {
            value: 35,
            label: 'S',
            spacing: 10,
            labelWidth: 30,
            labelTextStyle: {color: 'gray'},
            frontColor: '#A06AF9',
            topLabelComponent: () => <Text style={{height:20,width:20,color: '#fff', fontSize:9}}>1K</Text>
          },
          {value:1, frontColor: '#F78300',topLabelComponent: () => <Text style={{height:20,width:20,color: '#fff', fontSize:9}}>0</Text>},
      ];


      const renderTitle = () => {
        return(
          <View style={{marginBottom:30}}>
          
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              
              paddingRight:20
            //   backgroundColor: 'yellow',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  height: 12,
                  width: 12,
                  borderRadius: 6,
                  backgroundColor: '#A06AF9',
                  marginRight: 8,
                  
                }}
              />
              <Text
                style={{
               
                  color: 'lightgray',
                }}>
                Normalized Steps
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center',marginLeft:20}}>
              <View
                style={{
                  height: 12,
                  width: 12,
                  borderRadius: 6,
                  backgroundColor: '#F78300',
                  marginRight: 8,
                }}
              />
              <Text
                style={{
                  color: 'lightgray',
                }}>
                Pool A
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center',marginLeft:20}}>
              <View
                style={{
                  height: 12,
                  width: 12,
                  borderRadius: 6,
                  backgroundColor: '#53BFFD',
                  marginRight: 8,
                }}
              />
              <Text
                style={{
                  color: 'lightgray',
                }}>
                Pool B
              </Text>
            </View>
          </View>
        </View>
        )
    }


  return (
    <View
    style={{ backgroundColor:"#262A34",width:"90%",borderRadius:30,padding:20,paddingHorizontal:0}}
        >
        {renderTitle()}
        <BarChart
          data={barData}
          barWidth={10}
          initialSpacing={10}
          spacing={18}
          roundedTop
          roundedBottom
          rulesColor={"grey"}
          rulesType={"dashed"}
          dashGap={0}
          
        //   hideRules
        //   xAxisThickness={0}
        xAxisColor={"grey"}
          yAxisThickness={0}
          yAxisTextStyle={{color: 'gray'}}
          noOfSections={7}
          maxValue={70}
        />
      </View>
  );
};

export default Chart1;
