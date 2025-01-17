import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientCard2 = () => {
  return (
    <View style={styles.container}>
       <Image
          source={require('../../assets/images/bank.png')} // Update with your actual path
          style={styles.runningMan}
        />
                 <LinearGradient
      colors={['#E42A6C', '#C393FF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradientBorder}
    >
      <View style={styles.card}>
       
        <View style={styles.content}>
          
          <Text style={styles.description}>
          5,175 SSB tokens will be distributed among all the participants.
          </Text>
        </View>
      </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    
  },
  gradientBorder: {
    borderRadius: 12,
    padding: 1.5, 
    marginHorizontal: 20,
    marginTop: 20,
  },
  card: {
    width: '100%',
    height: 70,
    backgroundColor: '#181A20',
    borderRadius: 10,
    
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderColor: '#262A34',
    borderWidth: 1,
  },
  runningMan: {
    width: 74,
    height: 103,
    position: 'absolute',
    top: -20,
    left: 30,
    
    zIndex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 90, 
  },
  bitcoinIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  description: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Lexend',
    lineHeight: 20,
    
  },
});

export default GradientCard2;
