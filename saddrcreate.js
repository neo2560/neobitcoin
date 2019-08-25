
bitcore = require('bitcore-lib');
buffer= require('buffer');

var bip38 = require('bip38')
var wif = require('wif')



var code = "1234";
var codekey = buffer.Buffer.from(code);

var arr = [codekey];
var compositekey = buffer.Buffer.concat(arr);


console.log("getBufControlCodeAddress 1 compositekey="+ compositekey.toString('hex'));

var uidcompositekey= bitcore.util.buffer.hexToBuffer(compositekey.toString('hex'));

var otpHash = bitcore.crypto.Hash.sha256ripemd160(uidcompositekey); //bitcoin.crypto.hash160(compositekey);
//var p = 0x06c06f6d931d7bfba2b5bd5ad0d19a8f257af3e3;

console.log("getBufControlCodeAddress 1 pubKeyHash="+ otpHash.toString('hex'));
var s =  new bitcore.Script();
 s.add(bitcore.Opcode.OP_HASH160)
 s.add(otpHash)
 s.add(bitcore.Opcode.OP_EQUAL)
var redeemScript = s.toBuffer();
console.log("getBufControlCodeAddress redeemScript="+ redeemScript.toString('hex'));

var sho = bitcore.Script.buildScriptHashOut(s);
console.log("sho="+ sho.toString('hex'));

var address = sho.toAddress(bitcore.Networks.testnet);

console.log("address="+ address);
