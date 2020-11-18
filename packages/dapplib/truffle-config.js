require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy reward stereo coin grace depth furnace general'; 
let testAccounts = [
"0x89d12199ddae3450cd39d6a1ae119982098d34cc3f167af25869586daf196411",
"0xfe2a6c19256c80ca3bdd8546d567bc0e5c8441cf5d51bc36cd22100e90c07939",
"0x7661485b7728d542e09dc25e88cc9c86b30072df308f1459aef431ef8dadd2cf",
"0x66f59d92e8248da7092821a063002f642b933fc7ef8ea685a2d43198c2c78b56",
"0xc672cdb1975f131bf67f7d39b467b40c6aa1418155cb946d3730dbcb10a85a5f",
"0xa2d64883d2ab2a348edfcb629c596fac78d8877b986b62ab3abbd91f64e49d73",
"0xc5a9e10946d875c452eb973ed73b658ae8aaf47922bba303d9455f382dc8ad38",
"0x1f0e588e2aca88d314c2421941343f9eeffba4aa5c2b2de42ed89394e4667d4c",
"0x719e5974b9b58743e815ed5fe23f9f6a237d2449eb15e09777389e8372b55520",
"0xdc5e65f15ea90cc336206ed2936c84ad68c3796453b766a7adccc1101d5f0dc3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
