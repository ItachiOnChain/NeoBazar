# NeoBazar - NFT Marketplace for Neo X Network

NeoBazar is a decentralized NFT marketplace built on the Neo X network. It allows users to mint, buy, and sell NFTs (Non-Fungible Tokens) seamlessly using the power of blockchain technology. The platform is designed to provide a user-friendly and efficient way for creators and collectors to engage with digital assets on the Neo X network.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Smart Contracts](#smart-contracts)
- [Usage](#usage)
- [License](#license)

## Features
- **Mint NFTs**: Creators can mint their NFTs, providing metadata such as name, description, and image.
- **Buy and Sell NFTs**: Users can list their NFTs for sale, browse other NFTs, and purchase them directly using their wallets.
- **Wallet Integration**: Supports MetaMask for seamless blockchain interactions.
- **IPFS Integration**: Uses Pinata for decentralized storage of NFT metadata and images.
- **Neo X Network**: Built on the Neo X blockchain for fast, low-cost transactions and a secure environment.

## Tech Stack
- **Frontend**: React, Next.js
- **Blockchain**: Neo X Network, Solidity (smart contracts)
- **Wallet**: MetaMask
- **IPFS**: Pinata for file storage
- **Web3**: ethers.js for interacting with smart contracts

## Prerequisites
To run this project, you’ll need the following installed on your system:
- Node.js (v14.x or higher)
- npm or yarn (package manager)
- MetaMask browser extension
- Neo X network setup in MetaMask
- A local or public blockchain node (Neo X)

## Getting Started
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/neobazar.git
   cd neobazar
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   The app will be running on `http://localhost:3000`.

4. **Smart Contracts**: Deploy the NFT marketplace smart contract on the Neo X network. You can find the contract details and instructions in the `contracts` folder.

## Environment Variables
You will need to create a `.env.local` file in the root of the project to store your environment variables. Add the following:

```
NEXT_PUBLIC_PINATA_API_KEY=your_pinata_api_key
NEXT_PUBLIC_PINATA_SECRET_API_KEY=your_pinata_secret_api_key
NEXT_PUBLIC_MARKETPLACE_ADDRESS=your_marketplace_contract_address
```

> Replace `your_pinata_api_key`, `your_pinata_secret_api_key`, and `your_marketplace_contract_address` with your actual credentials.

## Smart Contracts
The marketplace smart contracts are located in the `contracts` folder. To deploy them, follow these steps:

1. Install Hardhat (or your preferred development framework):
   ```bash
   npm install --save-dev hardhat
   ```

2. Compile the contract:
   ```bash
   npx hardhat compile
   ```

3. Deploy the contract to the Neo X network:
   ```bash
   npx hardhat run scripts/deploy.js --network neox
   ```

Ensure your `hardhat.config.js` file is configured with the Neo X network details.

## Usage
1. **Connect Wallet**: Users need to connect their MetaMask wallet to NeoBazar. Ensure they have the Neo X network added to MetaMask.
2. **Mint NFTs**: Creators can upload their artwork or digital assets, along with metadata (name, description), to mint NFTs.
3. **Buy/Sell NFTs**: Users can browse through the marketplace, purchase NFTs, and resell them using the marketplace features.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.