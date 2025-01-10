import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const RunningCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../../assets/images/running.png')} // Update with your actual path
          style={styles.runningMan}
        />
        <View style={styles.content}>
          <Image
            source={require('../../assets/images/bitcoin.png')} // Update with your actual path
            style={styles.bitcoinIcon}
          />
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
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '90%',
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  runningMan: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: -30,
    left: -20,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 80, // Adjust for running man overlap
  },
  bitcoinIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  description: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
    flexShrink: 1,
  },
});

export default RunningCard;
