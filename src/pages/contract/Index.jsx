import React from "react";
import claritySmartContract from "../../assests/clarity-smart-contract.png";
import clarityStacks from "../../assests/clarity-stacks.png"

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

            <div className="clarity-stacks">
                <p><strong>The contact</strong> is made with the <span>clarity language</span> of the stacks blockchain and contains public and read only functions that help verify bitcoin transactions and blocks through a <span>merkle tree.</span>
                </p>

                <div className="img">
                    <img src={clarityStacks} alt="clarity stacks" />
                </div>
            </div>

            <div className="submitting-transc">
                <h4>Submitting Bitcoin transactions to the stacks network</h4>
                <p>
                    Once a proof is assembled, the entirety of the proof is sent to a Clarity smart contract endpoint.
                    This works with a stacks contract call with the parameters containing the raw transaction or a decomposed
                    transaction object, block height and the Merkle proof,a helper functions in JavaScript can be found here {" "}
                    <a href="https://github.com/friedger/stacks-swaps/blob/main/src/lib/btcTransactions.js" target="_blank" rel="noreferrer">https://github.com/friedger/stacks-swaps/blob/main/src/lib/btcTransactions.js</a>
                </p>
            </div>
        </main>
    );
};

export default Contract;
