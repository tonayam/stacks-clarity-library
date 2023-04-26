import React from 'react';
import headerImg from '../../assests/header-img.png';
import poxImg from '../../assests/proof-of-transfer.png';
import blockchain from '../../assests/blockchain.png';

const Introduction = () => {
  return (
    <main className='introduction'>
      <section className='watch'>
        <h1>
          How Does Stacks Watch <span>Bitcoin</span>?
        </h1>
        <img src={headerImg} alt='header' />
      </section>

      <article className='p-o-x'>
        <p className='smart-contracts'>
          <strong>Smart Contracts of the Stacks blockchain</strong> have a view
          on the Bitcoin Blockchain: In the contracts, the block header hash of
          any bitcoin block can be requested. This is thanks to the{' '}
          <span>Proof-of-Transfer consensus.</span>
        </p>
        <div className='img'>
          <img src={poxImg} alt='proof of transaction' />
        </div>
      </article>

      <article className='clarity-bitcoin-library'>
        <p>
          The{' '}
          <a
            href='http://Clarity-Bitcoin-lib.org'
            rel='noreferrer'
            target='_blank'
          >
            <span>Clarity Bitcoin Library</span>
          </a>{' '}
          is a <strong>Clarity contract</strong> that allows developers to
          handle information from the Bitcoin blockchain more easily. In
          particular, it allows us to verify whether a Bitcoin transaction was
          actually mined on the Bitcoin blockchain.
        </p>
        <div className='grey-box'>
          <h3>
            Any Bitcoin transaction can be verified that has 8 or less input
            parameters and 8 or less output parameters.
          </h3>
        </div>
      </article>

      <article className='merkle-proof'>
        <p>
          This site explains how stacks parses bitcoin transactions and block
          headers and verifies merkle proofs from the bitcoin chain .
        </p>
        <div className='img'>
          <img src={blockchain} alt='blockchain' />
        </div>
      </article>
    </main>
  );
};

export default Introduction;
