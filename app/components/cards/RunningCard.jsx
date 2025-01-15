import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const RunningCard = () => {
  return (
    <View style={styles.container}>
       <Image
          source={require('../../assets/images/running.png')} // Update with your actual path
          style={styles.runningMan}
        />
      <View style={styles.card}>
       
        <View style={styles.content}>
          
          <Text style={styles.description}>
            Every step matters—track your progress and keep moving forward!
          </Text>
        </View>
      </View>
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
  card: {
    width: '90%',
    height: 70,
    backgroundColor: 'transparent',
    borderRadius: 10,
    
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderColor: '#262A34',
    borderWidth: 1,
  },
  runningMan: {
    width: 147,
    height: 140,
    position: 'absolute',
    top: -60,
    left: 10,
    resizeMode: 'contain',
    zIndex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 100, 
  },
  bitcoinIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  description: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Lexend',
    
  },
});

export default RunningCard;
