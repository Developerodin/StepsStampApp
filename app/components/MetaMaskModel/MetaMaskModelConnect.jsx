import { StyleSheet, Text, View, Pressable } from 'react-native';

import {
	WalletConnectModal,
	useWalletConnectModal,
} from '@walletconnect/modal-react-native';
import GradientButton from '../Button/GradientButton';
// Add in the useWalletConnectModal hook

const projectId = 'b3d747f46cd3a8e2b352b36420fb8617';

const providerMetadata = {
	name: 'StepStamps',
	description: 'StepStamps WalletConnect Expo Example',
	url: 'https://berachain.com',
	icons: ['https://avatars.githubusercontent.com/u/96059542'],
	redirect: {
		native: 'StepStamps://',
		universal: 'https://berachain.com',
	},
};

export const  MetaMaskModelConnect=() => {
	// Add in the useWalletConnectModal hook + props
	const { open, isConnected, address, provider } = useWalletConnectModal();

	// Function to handle the
	const handleButtonPress = async () => {
        console.log("hanndel btn pressss =>")
		if (isConnected) {
			return provider?.disconnect();
		}
		return open();
	};

	// Main UI Render
	return (
		<View>
			{/* <Text style={styles.heading}>WalletConnect Modal RN Tutorial</Text>
			<Text>{isConnected ? address : 'No Connected'}</Text>
			<Pressable
				onPress={handleButtonPress}
				style={styles.pressableMargin}
			>
				<Text>{isConnected ? 'Disconnect' : 'Connect'}</Text>
			</Pressable> */}

<GradientButton onPress={handleButtonPress} title="CONNECT METAMASK WALLET" icon={require('../../assets/icons/metamask.png')}  />

			<WalletConnectModal
				explorerRecommendedWalletIds={[
					'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
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