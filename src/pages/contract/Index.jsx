import React from "react";
import claritySmartContract from "../../assests/clarity-smart-contract.png";

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
        </main>
    );
};

export default Contract;
