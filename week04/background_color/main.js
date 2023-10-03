let contract;
let signer;
let contractWithSigner;

main();

async function main() {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, provider);
    contractWithSigner = contract.connect(signer);

    // functions to set each individual color channel in the smart contract
    function setRed() {
        contractWithSigner.setRed($('#redInput').val());
        setBackgroundColor();
    }
    function setGreen() {
        contractWithSigner.setGreen($('#greenInput').val());
        setBackgroundColor();
    }
    function setBlue() {
        contractWithSigner.setBlue($('#blueInput').val());
        setBackgroundColor();
    }
    
    // Event listeners that make it so when you click the "submit" buttons on the web page, the colors get passed to the contract
    $('#redSubmit').click(setRed);
    $('#greenSubmit').click(setGreen);
    $('#blueSubmit').click(setBlue);

    // function to set the background color of the page based on the red, green and blue values stored in the smart contract.
    async function setBackgroundColor() {
        let red = await contract.getRed();
        let green = await contract.getGreen();
        let blue = await contract.getBlue();
        $('body').css('background-color', `rgb(${red}, ${green}, ${blue})`)
    }

    // setInterval is a function that allows an action to be repeated consistently. Here, the JavaScript reads from 
    setInterval(function() {
        setBackgroundColor();
    }, 2000)
}