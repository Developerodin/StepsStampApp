import { StyleSheet, Text, View, Pressable } from 'react-native';

import {
	WalletConnectModal,
	useWalletConnectModal,
} from '@walletconnect/modal-react-native';
import GradientButton from '../Button/GradientButton';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Add in the useWalletConnectModal hook

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

export const  MetaMaskModelConnect=() => {
	// Add in the useWalletConnectModal hook + props
	const { open, isConnected, address, provider } = useWalletConnectModal();
     
	const saveWalletAddress = async (walletAddress) => {
		try {
			await AsyncStorage.setItem('walletAddress', walletAddress);
			console.log('Wallet address saved:', walletAddress);
		} catch (error) {
			console.error('Error saving wallet address:', error);
		}
	};

	// Retrieve wallet address from AsyncStorage
	const getWalletAddress = async () => {
		try {
			const storedAddress = await AsyncStorage.getItem('walletAddress');
			if (storedAddress) {
				console.log('Retrieved wallet address:', storedAddress);
			} else {
				console.log('No wallet address found in storage');
			}
		} catch (error) {
			console.error('Error retrieving wallet address:', error);
		}
	};
	// Function to handle the
	const handleButtonPress = async () => {
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


	useEffect(()=>{
		if(address !== ""){
			saveWalletAddress(address)
		}
		getWalletAddress()
	},[address])
	// Main UI Render
	return (
		<View>
			<Text style={styles.heading}>WalletConnect Modal RN Tutorial</Text>
			<Text>{isConnected ? address : 'No Connected'}</Text>
			<Pressable
				onPress={handleButtonPress}
				style={styles.pressableMargin}
			>
				<Text>{isConnected ? 'Disconnect' : 'Connect'}</Text>
			</Pressable>

<GradientButton
				onPress={handleButtonPress}
				title={isConnected ? 'DISCONNECT WALLET' : 'CONNECT WALLET'}
				icon={require('../../assets/icons/metamask.png')}
			/>

			<WalletConnectModal
				explorerRecommendedWalletIds={[
					'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96'
				]}
				explorerExcludedWalletIds={'ALL'}
				projectId={projectId}
				providerMetadata={providerMetadata}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	heading: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 16,
	},
	pressableMargin: {
		marginTop: 16,
	},
});