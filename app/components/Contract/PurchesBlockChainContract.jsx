import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { ethers } from 'ethers';
import 'react-native-get-random-values'; // Polyfill for random values
import '@ethersproject/shims'; // Polyfill for ethers.js
import { MetaMaskModelConnect } from '../MetaMaskModel/MetaMaskModelConnect';

const PurchesBlockChainContract = () => {
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [purchaseAmount, setPurchaseAmount] = useState(''); // Amount to send

  // Replace with your DSE testnet RPC URL
  const DSE_TESTNET_RPC = 'https://data-seed-prebsc-1-s1.binance.org:8545';
  const CHAIN_ID = 97; // BSC Testnet Chain ID

  // Replace with your contract's ABI and address
  const CONTRACT_ABI = [
    {
      "inputs": [
        { "internalType": "uint256", "name": "amount", "type": "uint256" }
      ],
      "name": "purchase",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ];
  const CONTRACT_ADDRESS = '0xYourSmartContractAddress'; // Replace with your contract's address

  useEffect(() => {
    // Initialize provider and contract
    const init = async () => {
      try {
        const provider = new ethers.JsonRpcProvider(DSE_TESTNET_RPC, {
          name: 'bsc-testnet',
          chainId: CHAIN_ID,
        });

        const signer = provider.getSigner(); // Use if signing transactions
        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer || provider);

        setProvider(provider);
        setContract(contract);
      } catch (error) {
        console.error('Error initializing provider or contract:', error.message);
      }
    };

    // init();
  }, []);

  // Call the purchase method on the contract
  const callPurchase = async () => {
    if (!contract) {
      Alert.alert('Error', 'Contract not initialized.');
      return;
    }

    if (!purchaseAmount) {
      Alert.alert('Error', 'Please enter a valid amount.');
      return;
    }

    try {
      // Convert purchase amount to Wei (smallest Ether unit)
      const amountInWei = ethers.utils.parseEther(purchaseAmount); // Corrected syntax

      // Call the purchase method with the value
      const tx = await contract.purchase({
        value: amountInWei, // Sending Ether along with the transaction
      });

      // Wait for the transaction to be mined
      await tx.wait();
      Alert.alert('Success', 'Purchase transaction completed!');
    } catch (error) {
      Alert.alert('Error', `Transaction failed: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart Contract Purchase</Text>
      <MetaMaskModelConnect />
      <TextInput
        style={styles.input}
        placeholder="Enter amount in Ether"
        keyboardType="numeric"
        onChangeText={setPurchaseAmount}
      />
      <Button title="Make Purchase" onPress={callPurchase} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, marginBottom: 20 },
  input: { borderWidth: 1, width: '100%', padding: 10, marginVertical: 10 }
});

export default PurchesBlockChainContract;
