import nftMarketplace from "./NFTMarketplace.json";

// NFT MARKETPLACE
//--------NEO X TESTNET
export const NFTMarketplaceAddress =
  "0xa0B843EC6BA0BA49379Bd74Ee451a9C4a6460484"; // Your NeoX contract address

export const NFTMarketplaceABI = nftMarketplace.abi;

// NETWORK
const networks = {
  neo_x_testnet: {
    chainId: `0x${Number(12227332).toString(16)}`, // NeoX Testnet Chain ID
    chainName: "NeoX T4 Testnet",
    nativeCurrency: {
      name: "GAS",
      symbol: "GAS", // Native token symbol for NeoX
      decimals: 18,
    },
    rpcUrls: ["https://neoxt4seed1.ngd.network"], // RPC Endpoint for NeoX Testnet
    blockExplorerUrls: ["https://xt4scan.ngd.network/"], // Block Explorer for NeoX Testnet
  },
};

const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        },
      ],
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const handleNetworkSwitch = async () => {
  const networkName = "neo_x_testnet"; // Set NeoX as the default network
  await changeNetwork({ networkName });
};
