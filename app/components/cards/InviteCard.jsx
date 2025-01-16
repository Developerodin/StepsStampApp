import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Clipboard, Alert,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import InviteIcon from '../../assets/icons/InviteIcon.png';
import CopyIcon from '../../assets/icons/CopyIcon.png';

const InviteCard = () => {
  const referralCode = 'https://www.giottus.com/?refcode';

  const copyToClipboard = () => {
    Clipboard.setString(referralCode);
    console.log('Copied to clipboard', referralCode);
  };

  return (
    <View style={styles.container}>
      {/* Icon */}
      <Image source={InviteIcon} style={styles.icon} />

      {/* Title */}
      <Text style={[styles.title,{marginTop : 10}]}>Invite your Friend & Earn</Text>
      <Text style={styles.title}>100 SSB Points</Text>

      {/* Subtitle */}
      <Text style={[styles.subtitle,{marginBottom: 0}] }>
        Lorem ipsum dolor sit amet 
      </Text>
      <Text style={[styles.subtitle,{marginTop: 0}]}>
      consectetur. Vel tempus proin velit urna.
      </Text>

      {/* Referral Code Box */}
      <View style={styles.codeContainer}>
        <Text style={styles.code}>{referralCode}</Text>
        <TouchableOpacity onPress={copyToClipboard}>
          <Image source={CopyIcon} style={{height:28,width: 28}}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262A34',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    
  },
  icon: {
    height: 66,
    width: 66,
    marginBottom: 16,
    marginTop: 5,
  },
  title: {
    fontSize: 18,
    
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Lexend',
  },
  points: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6E31',
    textAlign: 'center',
    marginVertical: 8,
  },
  subtitle: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
    fontFamily: 'Lexend',
    opacity: 0.6,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181A20',
    borderRadius: 15,
    padding: 12,
    width: '100%',
    justifyContent: 'space-between',
    height:50,
    marginTop: 5,
  },
  code: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Lexend',
    opacity: 0.6,
    
  },
});

export default InviteCard;
