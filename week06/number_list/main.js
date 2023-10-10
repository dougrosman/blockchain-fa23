main();

// everything goes inside the main() function
async function main() {
  // A Web3Provider wraps a standard Web3 provider, which is
  // what MetaMask injects as window.ethereum into each page
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  // MetaMask requires requesting permission to connect users accounts
  await provider.send("eth_requestAccounts", []);

  // The MetaMask plugin also allows signing transactions to
  // send ether and pay to change state within the blockchain.
  // For this, you need the account signer...
  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, abi, provider);

  const contractWithSigner = contract.connect(signer);

  /////////////////////////////////
  // REQUIRED ETH CODE ABOVE ^^^^^^^^^ //
  /////////////////////////////////
  // OUR OWN CODE BELOW VVVVVVVVVVV //
  ///////////////////////////////////////


  // a click event listener on the submit button
  $('#numberSubmit').click(function(){
    // store the number that was typed into the box in a variable called 'numberInBox'
    let numberInBox = $('#numberInput').val();

    // store the number in the smart contract
    contractWithSigner.insertNumber(numberInBox);
    console.log(numberInBox);
  })

  let myNumberList = await contract.viewNumberList();

  for(let i = 0; i < myNumberList.length; i++) {
    let currentNumber = myNumberList[i];
    let numberDisplay = `<p>${currentNumber}</p>`;
    $('#numberListContainer').append(numberDisplay);
  }
}








let submitButton = document.getElementById("numberSubmit");

submitButton.addEventListener("click", function(){

    console.log("hello")

})

$('#numberSubmit').click(function(){
    console.log("hello")
})
