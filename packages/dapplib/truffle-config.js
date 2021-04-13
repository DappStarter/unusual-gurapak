require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install inhale fresh turn bitter birth oven purity gesture loan food genre'; 
let testAccounts = [
"0x1109ec54c8f7048cf49442b1a1ca610ffd177238f3ed6678193d0a3cd3cbec2e",
"0xc072b2b6ceab734baa4c27331caa2ff8dc8a58be58c46a4ab050fd4117bc1215",
"0x82e768b7f3f56d028f03ec48585570542570103f7bfd104807dd6eb8ae94b00b",
"0xef11b404bb2329c808bfac7871fc8b2f64de23a0eeb98d3a6310d893303dc8e8",
"0xc3dd4a81981d83cb24fec99601bce372d414dd66ef0a858d9b859d51d34e942d",
"0xde19e51cd7dc2f7ed209a6477d5c42a4ba8df3ae37f71a7d781bc73a4a7037ac",
"0xa75d5658bf4ee3ee17482b6e5cb6cd5b3216e78aa6b015a08226b4556db03e45",
"0x6c3e02e9b85353cbb10a7e64928fc6fb3e3e8f45dc92ba5a9efcbdc2b971c1fa",
"0x81b614339c44809a183beab8b7d57b26926530c492f4c65f086b5a49c2db303d",
"0xd282b45c6ae25218c360c417a306f0601d848dffa776639790ad3fb28a1433f4"
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
