var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('FAF2EFB4'),
  addressVersion: 102,
  privKeyVersion: 103,
  P2SHVersion: 103,
  hkeyPublicVersion: 0x0,
  hkeyPrivateVersion: 0x0,
  genesisBlock: {
    hash: hex('000000429869eb624d77c9ea5ecc9abbc3f40fd2d7760ed93e1f4070fd36681d'),
    merkle_root: hex('2e953947cd107664f5a0bdc5ea99c3ce4537ed66cf04eb46eac7284e3b790a2e'),
    height: 0,
    nonce: 3677645,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1538040072,
    bits: 0x1e0fffff,
  },
  dnsSeeds: [
    '13.115.89.54'
  ],
  defaultClientPort: 32338
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
