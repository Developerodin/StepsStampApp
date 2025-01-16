import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ReferralBonusCard = () => {
  return (
    <View >
      <Text style={styles.title}>Referrals Bonus</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.point}>1. Direct Referral Bonus</Text>
        <Text style={styles.point}>
          2. Rewards are given in SSB Tokens (current price) based on the SS Blockchain you own, as shown below
        </Text>
        <View style={styles.bonusList}>
          {bonusData.map((item, index) => (
            <View key={index} style={styles.bonusItem}>
              <Image source={item.icon} style={styles.icon} />
              <Text style={styles.bonusText}>
                <Text style={styles.ssbType}>{item.type}</Text> :       {item.percentage} {item.bonusType}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const bonusData = [
  {
    type: 'White SSB',
    percentage: '7%',
    bonusType: 'Direct Referral',
    icon: require('../../assets/icons/WhiteSSB.png'), // Replace with your actual image path
  },
  {
    type: 'Black SSB',
    percentage: '7%',
    bonusType: 'Direct Referral',
    icon: require('../../assets/icons/BlackSSB.png'), // Replace with your actual image path
  },
  {
    type: 'Silver SSB',
    percentage: '8%',
    bonusType: 'Direct Referral',
    icon: require('../../assets/icons/SilverSSB.png'), // Replace with your actual image path
  },
  {
    type: 'Gold SSB',
    percentage: '10%',
    bonusType: 'Direct Referral',
    icon: require('../../assets/icons/GoldSSB.png'), // Replace with your actual image path
  },
  {
    type: 'Green SSB',
    percentage: '15%',
    bonusType: 'Direct Referral',
    icon: require('../../assets/icons/GreenSSB.png'), // Replace with your actual image path
  },
];

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#181A20',
    marginHorizontal: 20,
    width: '100%',
  },
  title: {
    fontSize: 20,
    
    color: '#FFFFFF',
    marginBottom: 16,
    marginLeft: 20,
    fontFamily: 'Lexend',
  },
  contentContainer: {
    backgroundColor: '#262A34',
    borderRadius: 12,
    padding: 16,
    marginHorizontal:20
  },
  point: {
    fontSize: 14,
    color: '#B3B3B3',
    marginBottom: 14,
    marginLeft: 15,
    fontFamily: 'Lexend',
  },
  bonusList: {
    marginTop: 8,
    marginLeft: 20,
  },
  bonusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    width: 21,
    height: 19,
    marginRight: 12,
  },
  bonusText: {
    fontSize: 14,
    fontFamily: 'Lexend',
    color: '#FFFFFF',
  },
  ssbType: {
    fontWeight: 'bold',
    fontFamily: 'Lexend',
    color: '#B3B3B3',
    
  },
});

export default ReferralBonusCard;
