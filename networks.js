var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('e5777746'),
  addressVersion: 53,
  privKeyVersion: 181,
  P2SHVersion: 112,
  hkeyPublicVersion: 0x0,
  hkeyPrivateVersion: 0x0,
  genesisBlock: {
    hash: hex('00000da3701e9b6eb1afa31d97ce6fc2c09cb7e165271b2e900a4275df8dd5bb'),
    merkle_root: hex('0a8875e41a01a01dd0f1c759d5da353ee92561c089d19ef939510d6eda44c096'),
    height: 0,
    nonce: 0,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1511862256,
    bits: 0x1e0fffff,
  },
  dnsSeeds: [
    'dnsseed.neetcoin.jp'
  ],
  defaultClientPort: 21011
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('82547825'),
  addressVersion: 111,
  privKeyVersion: '239',
  P2SHVersion: 196,
  hkeyPublicVersion: 0x0,
  hkeyPrivateVersion: 0x0,
  genesisBlock: {
    hash: hex('0000299b82787bca0132dbe67f8360d335ca114991993f67f48bdb462512e452'),
    merkle_root: hex('0a8875e41a01a01dd0f1c759d5da353ee92561c089d19ef939510d6eda44c096'),
    height: 0,
    nonce: 0,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1511862256,
    bits: 0x1f00ffff,
  },
  dnsSeeds: [],
  defaultClientPort: 21873
};
