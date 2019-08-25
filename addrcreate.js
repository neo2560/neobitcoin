
bitcore = require('bitcore-lib');
var bip38 = require('bip38')
var wif = require('wif')



var privateKey = new bitcore.PrivateKey();
var exported = privateKey.toWIF();

// e.g. L3T1s1TYP9oyhHpXgkyLoJFGniEgkv2Jhi138d7R2yJ9F4QdDU2m
var imported = bitcore.PrivateKey.fromWIF(exported);
var privatestr = privateKey.toString();

console.log("wif str="+exported);
console.log("privatekey str="+privatestr);

var publickey = privateKey.toPublicKey().toString();
console.log("publickey str="+publickey);

var addr1 = bitcore.Address(privateKey.toPublicKey(), bitcore.Networks.testnet).toString();
console.log("from publickey addr1="+addr1);

var addr2 = privateKey.toAddress(bitcore.Networks.testnet).toString();
console.log("from privatekey addr2="+addr2);

var addr3 = bitcore.PrivateKey.fromWIF(exported).toAddress(bitcore.Networks.testnet).toString()

console.log("from wif addr3="+addr3);

var liveaddr3 = bitcore.PrivateKey.fromWIF(exported).toAddress(bitcore.Networks.livenet).toString()
console.log("liveaddr3="+liveaddr3);
