import { configureChains, createConfig } from 'wagmi';
import { goerli} from 'wagmi/chains';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';

const alchemyApiKey = process.env.ALCHEMY_API_KEY || 'defaultApiKey';

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [goerli],
    [
        alchemyProvider({ apiKey: alchemyApiKey }),
        publicProvider(),
    ],
);

export const config = createConfig({
    autoConnect: true,
    connectors: [
        new MetaMaskConnector({ chains }),
    ],
    publicClient,
    webSocketPublicClient,
});
