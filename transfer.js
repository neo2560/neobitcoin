
bitcore = require('bitcore-lib');
var bip38 = require('bip38')
var wif = require('wif')
request = require('request');



var privatestr = "7acb44b816c552b4dae5503879e4b18d3958ef68d06f79d5bceaedbeef2edc3d";

var privateKey = new bitcore.PrivateKey.fromString(privatestr);

var exported = privateKey.toWIF();
//addr1=n2MdJNvQkLxkXaB5sLKbUEY2r3y6yPLLVL


//addr2=mfmKy5vkmure8GpaAcGXyqBRYgx1YknUNE



/*

[{"address":"n2MdJNvQkLxkXaB5sLKbUEY2r3y6yPLLVL","txid":"c8c2287a97d92505a8bab0eb01e1de1cdcb5dea77f32f012e4771850134f1d3c","vout":0,"scriptPubKey":"76a914e4970ac579f84cdd1e32b96faef3a28437b27f2788ac","amount":0.0001,"satoshis":10000,"height":1575643,"confirmations":4}]


var utxo = {
  "txId" : "115e8f72f39fad874cfab0deed11a80f24f967a84079fb56ddf53ea02e308986",
  "outputIndex" : 0,
  "address" : "mfmKy5vkmure8GpaAcGXyqBRYgx1YknUNE",
  "script" : "76a91447862fe165e6121af80d5dde1ecb478ed170565b88ac",
  "satoshis" : 50000
};

var transaction = new bitcore.Transaction()
  .from(utxo)
  .to('1Gokm82v6DmtwKEB8AiVhm82hyFSsEvBDK', 15000)
  .sign(privateKey);

*/




var utxo = {
  "txId" : "c8c2287a97d92505a8bab0eb01e1de1cdcb5dea77f32f012e4771850134f1d3c",
  "outputIndex" : 0,
  "address" : "mfmKy5vkmure8GpaAcGXyqBRYgx1YknUNE",
  "script" : "76a914e4970ac579f84cdd1e32b96faef3a28437b27f2788ac",
  "satoshis" : 50000
};

var transaction = new bitcore.Transaction()
  .from(utxo)
  .to('mfmKy5vkmure8GpaAcGXyqBRYgx1YknUNE', 5000)
  .sign(privateKey);


  var txobject = transaction.toBuffer();

  var sendingtx = txobject.toString('hex')
 console.log("sendingtx="+sendingtx);


   var pushtx = {
    tx: sendingtx
   };


   var lurl = 'https://api.blockcypher.com/v1/btc/test3/txs/push';

   console.log("before push=", JSON.stringify(pushtx));


   request.post(lurl, {body:JSON.stringify(pushtx)} , function (error, response, body) {
        if (error) {
           reject(error);
        }
        console.log(body);
     });


