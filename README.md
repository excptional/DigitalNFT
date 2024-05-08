# CodeBird Token
CodeBird Token is an ERC-721 compliant non-fungible token (NFT) created on the Ethereum Soplia test network using Solidity.

### Overview
CodeBird Token represents a unique digital asset that can be owned, bought, sold, and traded on the Ethereum blockchain. It is created for demonstration and educational purposes to explore the creation and usage of NFTs.

### Features
ERC-721 compliant: CodeBird Token follows the ERC-721 standard, ensuring interoperability and compatibility with various platforms and applications.
Minting: Users can mint new CodeBird Tokens, each with a unique ID and metadata.
Ownership: Tokens can be owned by Ethereum addresses, allowing users to transfer ownership.
Metadata: Each token has associated metadata, providing additional information such as name, description, and image.

### Getting Started
To deploy and interact with the CodeBird Token contract on the Ethereum Soplia test network, follow these steps:

1.Clone the repository:
```shell
git clone https://github.com/your-username/codebird-token.git
```

2.Install dependencies:
```shell
npm init
npm install --save-dev hardhat
npx hardhat
npm install @openzeppelin/contracts
npm install dotenv --save
npm install --save-dev @nomiclabs/hardhat-ethers 'ethers@^5.0.0' --force
//Open the Command Prompt Administrator mode and go to the project direcory and run this command
npm install @alch/alchemy-web3 
```
3.Configure your Ethereum wallet and Alchemy API key in .env file:
```shell
API_URL = "https://eth-sepolia.g.alchemy.com/v2/<your-alchemy-api-key-here>"
PRIVATE_KEY = "<PRIVATE_KEY_OF_YOUR_METAMASK_WALLET>"
PUBLIC_KEY = "<PUBLIC_KEY_OF_YOUR_METAMASK_WALLET>"
```
4.Complie the contract:
```shell
npx hardhat compile
```
5.Deploy the contract:
```shell
npx hardhat run scripts/deploy.js --network soplia
```
6.Edit scripts deploy.js, mint-nft.js and finally deploy the NFT
```shell
node scripts/mint-nft.js
```

Interact with the contract using the provided scripts or integrate it into your application.

### License
This project is licensed under the MIT License.
