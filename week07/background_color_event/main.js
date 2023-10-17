let contract;
let signer;
let contractWithSigner;

main();

async function main() {
    // basic setup code required for all the web pages we make that interact with MetaMask and the Ethereum blockchain
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, provider);
    contractWithSigner = contract.connect(signer);

    /////// ADD YOUR CODE BELOW THIS LINE ///////

    // on page load, read the color values stored in the contract, and set the background color of the page
    setBackgroundColor();

    // functions to set each individual color channel in the smart contract. These functions will be called in the event listeners below, when the user clicks on the submit buttons on the web page.
    function setRed() {
        contractWithSigner.setRed($('#redInput').val());
    }
    function setGreen() {
        contractWithSigner.setGreen($('#greenInput').val());
        
    }
    function setBlue() {
        contractWithSigner.setBlue($('#blueInput').val());
    }

    async function setBackgroundColor() {
        let red = await contract.getRed();
        let green = await contract.getGreen();
        let blue = await contract.getBlue();
        $('body').css('background-color', `rgb(${red}, ${green}, ${blue})`)
    }
    
    // Event listeners that make it so when you click the "submit" buttons on the web page, the colors get passed to the contract
    $('#redSubmit').click(setRed);
    $('#greenSubmit').click(setGreen);
    $('#blueSubmit').click(setBlue);

    // event listener that triggers when any of the three color values is changed in the contract
    contract.on("colorSetEvent", (redValue, greenValue, blueValue) => {
        
        // set the background color of the page with the red, green and blue values stored in the contract
        $('body').css('background-color', `rgb(${redValue}, ${greenValue}, ${blueValue})`);

        // print a note to our JavaScript console letting us know that the color changed.
        console.log(`Color was changed, the new background color is: ${redValue}, ${greenValue}, ${blueValue}`);
    })    
}