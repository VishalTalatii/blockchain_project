var Tx = require('ethereumjs-tx').Transaction

const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/14a1708bf05c43e492caa326ffc3ac2e')
 

const account1 = '0x5C3c2b8D2076674b158B7335a92c74519ffedB44'  // Your account address 1
const account2 = '0x7FAe18EA45c2e5d2cc21b339cE3ba39000c27d36' // Your account address 2

const privateKey1 = Buffer.from('a2a786b6840674e98475153cd64c1e0ababa89b88b66e3988a18e4264c4335ea', 'hex')
const privateKey2 = Buffer.from('c906216c5abb8c53854dd8b319bcb34a74ebc9e352ee8d839719d40c308a3cfas', 'hex')


const sendTransaction = async(raw) => {
  return await web3.eth.sendSignedTransaction(raw)
}

const getTransactionCount = async(account) => {
  return await web3.eth.getTransactionCount(account)
}

const transferFunds = async(account1, account2, amount) => {

  let txCount = await getTransactionCount(account1)

  console.log("txCount returned: " + txCount)

  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(21000), 
    gasPrice: web3.utils.toHex(web3.utils.toWei('30', 'gwei')),
    to: account2,
    value:    web3.utils.toHex(web3.utils.toWei(amount, 'ether')),
  }

  const tx = new Tx(txObject, {chain:'ropsten', hardfork: 'petersburg'})

  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  console.log("about to send transaction")
  let minedTransaction = await sendTransaction(raw)
  console.log(minedTransaction)
  console.log("txHash: " + minedTransaction.transactionHash)
}

const transfer = async() => {
  await transferFunds(account1, account2, "0.001")
}

transfer()

