import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import GradientButton from '../Button/GradientButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ethers, parseEther } from 'ethers'; // Import ethers
import { WalletConnectModal, useWalletConnectModal } from '@walletconnect/modal-react-native';
import { Abi } from './ABIFile'; // Your contract's ABI file

const projectId = 'f6acabe1be0da6ade435837b8c4d9be6';

const providerMetadata = {
	name: 'YOUR_PROJECT_NAME',
	description: 'YOUR_PROJECT_DESCRIPTION',
	url: 'https://your-project-website.com/',
	icons: ['https://your-project-logo.com/'],
	redirect: {
		native: 'YOUR_APP_SCHEME://',
		universal: 'YOUR_APP_UNIVERSAL_LINK.com',
	},
};

const CONTRACT_ADDRESS = '0x46404BABE387474a6B1F407955BE9eF6Ac556224';
const CHAIN_ID = 97; // Binance Smart Chain Testnet

const PurchesBlockChainContract = () => {
	const [bnbPrice, setBnbPrice] = useState('0.01');
	const [tokenURI, setTokenURI] = useState('https://meet.google.com/bsr-hxrd-zor');
	const { open, isConnected, address, provider } = useWalletConnectModal(); // WalletConnect hook

	// Save Wallet Address to AsyncStorage
	const saveWalletAddress = async (walletAddress) => {
		try {
			await AsyncStorage.setItem('walletAddress', walletAddress);
			console.log('Wallet address saved:', walletAddress);
		} catch (error) {
			console.error('Error saving wallet address:', error);
		}
	};

	useEffect(() => {
		if (address) {
			saveWalletAddress(address);
		}
	}, [address]);

	// Mint NFT with BNB
	const mintNFT = async () => {
		if (!isConnected) {
			Alert.alert('Error', 'Please connect your wallet first.');
			return;
		}

		try {
			const walletProvider = new ethers.BrowserProvider(provider, CHAIN_ID); // Use the WalletConnect provider
			const walletSigner = await walletProvider.getSigner(); // Get the signer from the wallet

			// Initialize the contract with the signer
			const contract = new ethers.Contract(CONTRACT_ADDRESS, Abi, walletSigner);

			// Convert BNB price to Wei
			const amountInWei = parseEther(bnbPrice);
   console.log("amountInWei",amountInWei);
			// Send the transaction
			const tx = await contract.mintNFTWithBNB(tokenURI, {
				value: amountInWei, // Send BNB value
			});
			await tx.wait(); // Wait for the transaction to be confirmed

			Alert.alert('Success', 'NFT minted successfully!');
		} catch (error) {
			Alert.alert('Error', `Transaction failed: ${error.message}`);
			console.error('Transaction error:', error);
		}
	};

	// Handle WalletConnect Button
	const handleWalletConnect = async () => {
		try {
			if (isConnected) {
				await provider?.disconnect();
				console.log('Disconnected from wallet');
			} else {
				await open();
				console.log('Connecting to wallet...');
			}
		} catch (error) {
			console.error('Error during WalletConnect:', error);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Mint NFT with WalletConnect</Text>
			<Text>{isConnected ? `Wallet Address: ${address}` : 'No Wallet Connected'}</Text>
      <View style={{marginTop:50}}>
			<GradientButton
				onPress={handleWalletConnect}
				title={isConnected ? 'DISCONNECT WALLET' : 'CONNECT WALLET'}
				icon={require('../../assets/icons/metamask.png')}
			/>
      </View>
      <View style={{marginTop:50}}>
      <GradientButton
				onPress={mintNFT}
				title="Mint NFT"
				disabled={!isConnected} // Disable the button if wallet not connected
			/> 
      </View>

			

			<WalletConnectModal
				projectId={projectId}
				providerMetadata={providerMetadata}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	heading: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 16,
	},
});

export default PurchesBlockChainContract;
