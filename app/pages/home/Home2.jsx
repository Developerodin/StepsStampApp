import React from 'react'
import { View,Text, StyleSheet, ScrollView, Image } from 'react-native'
import WalkModeStepCountProgressBar from '../../components/graphs/WalkModeStepCountProgressBar'
import RewardModeStepCountProgressBar from '../../components/graphs/RewardModeStepCountProgressBar'
import SmallProgressBar from '../../components/graphs/SmallProgressBar'

export const Home2 = () => {
  return (
    <ScrollView style={styles.container}>

        <View style={{marginTop:30,marginBottom:60}}>
        <Text style={{fontSize:20,marginTop:20}}>Home Screens : </Text>
      <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
      <WalkModeStepCountProgressBar percentage={80} duration={1000}/>
      </View>

      <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
      <RewardModeStepCountProgressBar
 
  outerPercentage={20} 
  innerPercentage={70} 
  duration={1000} 
/>

      </View>

      <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
      <SmallProgressBar size={100} percentage={60} duration={1000} image={<Image
                  source={require(`../../assets/icons/logo2.png`)} // Ensure path is correct for the card background
                  resizeMode="contain"
                style={{width:40,height:40}}
                />}/>
      </View>

        </View>


      
      
       
    </ScrollView>
  )
}

const styles = StyleSheet.create({ 
  container: {
    flex:1
  }
})