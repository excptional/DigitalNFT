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

Clone the repository:
```shell
git clone https://github.com/your-username/codebird-token.git
```

Install dependencies:
```shell
cd codebird-token
npm install
```
Configure your Ethereum wallet and Alchemy API key in .env file:
```shell
MNEMONIC=your-mnemonic-here
ALCHEMY_API_KEY=your-alchemy-api-key-here
```
Deploy the contract:
```shell
npx hardhat run scripts/deploy.js --network soplia
```
Interact with the contract using the provided scripts or integrate it into your application.

License
This project is licensed under the MIT License.
