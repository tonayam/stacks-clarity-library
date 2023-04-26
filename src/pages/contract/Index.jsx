import React from 'react';
import claritySmartContract from '../../assests/clarity-smart-contract.png';
import clarityStacks from '../../assests/clarity-stacks.png';

const Contract = () => {
  return (
    <main className='contract'>
      <h1 className='title'>
        It's All About <span>Clarity</span>
      </h1>
      <div className='clarity-smart-contract'>
        <h5>Clarity smart Contract</h5>
        <img src={claritySmartContract} alt='clarity smart contract' />
      </div>
      <div className='clarity-stacks'>
        <p>
          <strong>The contract</strong> is written in{' '}
          <span>Clarity language</span> of the Stacks blockchain and contains
          read only functions that help verify bitcoin transactions through
          <span>block headers</span> and <span>merkle trees.</span>
        </p>
        <div className='img'>
          <img src={clarityStacks} alt='clarity stacks' />
        </div>
      </div>
      <div className='submitting-transc'>
        <h4>Submitting Bitcoin transactions to the stacks network</h4>
        <p>
          If you want to submit a bitcoin transaction to the stack network, a
          merkle proof needs to be assembled off-chain. A helper functions in
          JavaScript can be found here {` `}
          <a
            href='https://github.com/friedger/stacks-swaps/blob/main/src/lib/btcTransactions.js'
            target='_blank'
            rel='noreferrer'
          >
            https://github.com/friedger/stacks-swaps/blob/main/src/lib/btcTransactions.js
          </a>
          {` `}. The entirety of the proof is sent to a Clarity smart contract
          endpoint. The parameters containing the raw transaction or a
          decomposed transaction object, block height and the Merkle proof.
        </p>
      </div>

      <div className='contract-methods'>
        <h4>Methods used in the contract includes:</h4>
        <p>
          There are two ways to verify the btc tx in a contract and use the
          content of the bitcoin transaction :
        </p>
        <ul>
          <li>
            Parse-tx: the full tx is submitted, the contract parses it and uses
            the parts it needs if the tx was mined, the method
          </li>
        </ul>
        <ol>
          <li>
            Returns <strong>(err ERR-OUT-OF-BOUNDS)</strong> if we read past the
            end of txbuff
          </li>
          <li>
            Returns <strong>(err ERR-VARSLICE-TOO-LONG)</strong> if we find a
            scriptPubKey or scriptSig that's too long to parse.
          </li>
          <li>
            Returns <strong>(err ERR-TOO-MANY-TXOUTS)</strong> if there are more
            than eight inputs to read
          </li>
          <li>
            Returns <strong>(err ERR-TOO-MANY-TXINS)</strong> if there are more
            than eight outputs to read
          </li>
          <li>
            Returns <strong>(err ERR-TOO-MANY-TXINS)</strong> if there are more
            than eight outputs to read
          </li>
        </ol>
        <ul>
          <li>
            Concat-tx: The parts of the tx are submitted, the contract concats
            the parts to the full tx and uses the provided parts if the tx was
            mined
          </li>
        </ul>
        <p className='options'>
          There are two options to extract the details of two bitcoin
          transaction: 1) parse-tx) or 2) compose the raw transaction from its
          parts (concat-tx). Then the hash of the raw transaction (txid) is used
          in the merkel proof.
        </p>
      </div>
      <div className='contract-uses'>
        <h4>What can this Contract be used for?</h4>
        <p>
          Once it was confirmed that a bitcoin transaction was confirmed,
          different actions can be used parametrize these actions. For example,
          the amount of the first output can be used to determine how many SIP9
          tokens shoould be sent to the first input of the transaction.
        </p>
        <div className='witnesses'>
          <h4>Witnesses</h4>
        </div>
        <div className='grey-box'>
          <h3>
            <strong>Note:</strong> Witnesses of a segwitbitcoin transaction are
            not part of the txid
          </h3>
        </div>

        <div className='more-examples'>
          <h4>
            <strong>More examples:</strong>
          </h4>
          <p>
            Implement cross-chain swaps between bitcoin and Stacks assets
            (SIP-010 Fungible tokens, SIP-009 Non-Fungible Tokens or STX itself
            Accept bitcoin payment for Stacks assets) Read data embedded in a
            bitcoin transaction
          </p>

          <h4>
            <strong>Auditing a Stacking pool</strong>
          </h4>
          <p>
            The Clarity Bitcoin Library can be used to audit a Stacking Pool
            that pays out Stacking rewards in Stacks tokens, i.e. the pool
            receives Bitcoin rewards that are later converted to Stacks and,
            finally, distributed to the pool members. Pool members could report
            the reward Bitcoin transactions via a Clarity contract.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contract;
