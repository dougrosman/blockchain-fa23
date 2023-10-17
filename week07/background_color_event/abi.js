let contractAddress = "0x264730B08E157D90d71DC004015D99eF1D8699CC";
let contractABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "_red",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "_green",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "_blue",
				"type": "uint8"
			}
		],
		"name": "colorSetEvent",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "blue",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBlue",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getGreen",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRed",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "green",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "red",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_blue",
				"type": "uint8"
			}
		],
		"name": "setBlue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_green",
				"type": "uint8"
			}
		],
		"name": "setGreen",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_red",
				"type": "uint8"
			}
		],
		"name": "setRed",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]