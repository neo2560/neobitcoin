

//bitcore = require('bitcore-lib');
var bip38 = require('bip38')
var wif = require('wif')
var bitcore = require('bitcore-message');



var privateKey = new bitcore.PrivateKey('L23PpjkBQqpAF4vbMHNfTZAb3KFPBSawQ7KinFTzz7dxq6TZX8UA');
var message = new bitcore.Message('This is an example of a signed message.');

var signature = message.sign(privateKey);
var addr2 = privateKey.toAddress(bitcore.Networks.livenet).toString();
console.log("sender addr2="+addr2);


var address = '13Js7D3q4KvfSqgKN8LpNq57gcahrVc5JZ';
console.log("verifier address="+address);
//var signature =  //'IBOvIfsAs/da1e36W8kw1cQOPqPVXCW5zJgNQ5kI8m57FycZXdeFmeyoIqJSREzE4W7vfDmdmPk0HokuJPvgPPE=';

var verified = new bitcore.Message('This is an example of a signed message.').verify(address, signature);

console.log("verified="+verified);
