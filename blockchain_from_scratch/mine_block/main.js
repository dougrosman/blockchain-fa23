const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.nonce = 0; // nonce = number only used once
        this.hash = this.calculateHash();
    }

    calculateHash() {
        // calculate and store the hash
        let hash = SHA256(this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash + this.nonce);

        // convert the hash to a string
        let hashString = hash.toString();

        // return the string
        return hashString;
    }

    // we want the hash of our block to begin with a certain amount of zeros
    mineBlock(difficulty) {

        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
            console.log(this.hash)
        }

        console.log("\nWinning hash to mine the block: " + this.hash + "\nNonce: " + this.nonce + "\n");
        console.log(`\x1b[32mIt took ${this.nonce} hashes at difficulty ${difficulty} to mine this block.\x1b[0m`)

    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 6;
    }

    createGenesisBlock() {
        return new Block(0, Date.now(), "Genesis Block", "0");
    }

    // returns latest block in the chain
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    // adds a block to the chain, accepts a Block object
    addBlock(newBlock) {
        // get the hash of the latest block
        newBlock.previousHash = this.getLatestBlock().hash;

        newBlock.mineBlock(this.difficulty);

        // add the new block to the chain
        this.chain.push(newBlock);
    }

}

// create an instance of the coin

let demoCoin = new Blockchain();

console.log("\n$$$$$$$$$$$$$$$$$$$$$ MINING TIME $$$$$$$$$$$$$$$$$$$$$\n")

demoCoin.addBlock(new Block(1, Date.now(), {amount: 1000}));
