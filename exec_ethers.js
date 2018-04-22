var contractAbiFragment = [
   {
      "name" : "transfer",
      "type" : "function",
      "inputs" : [
         {
            "name" : "_to",
            "type" : "address"
         },
         {
            "type" : "uint256",
            "name" : "_tokens"
         }
      ],
      "constant" : false,
      "outputs" : [],
      "payable" : false
   }
];

var $execTrigger = $('#execTrigger');

function exec(e) {
  e.preventDefault();
  var contractAddress = $('#contractAddress').val();
  var fromAddress = $('#fromAddress').val();
  var toAddress = $('#toAddress').val();
  var privateKey = $('#privateKey').val();

  var provider = ethers.providers.getDefaultProvider('kovan');
  var wallet = new ethers.Wallet(privateKey, provider);
  var contract = new ethers.Contract(contractAddress, contractAbiFragment, wallet);

  var numberOfDecimals = 18;
  var numberOfTokens = ethers.utils.parseUnits('5.0', numberOfDecimals);

  contract.transfer(toAddress, numberOfTokens).then(function(tx) {
    console.log(tx);
  });
}

$execTrigger.on('click', exec);
