import React from "react";

import './CryptoList.css'

function CryptoList(props) {

    let cryptoList = props.cryptoList;

    let liElements = cryptoList.map((cryptoObj) => {

        // console.log(cryptoObj.currency);

        return(
            <li key={cryptoObj.currency}>
                <span className="cryptoLabel">Last rate:</span>
                <span className={`cryptoRate ${cryptoObj.cssClass}`}>{cryptoObj.lastRate} {cryptoObj.htmlArray}</span>
                <span className="CurrencyTicker">{cryptoObj.currency}</span>
                <span className="CurrencySymbol">[{cryptoObj.symbol}]</span>
            </li>

        );
    })

    // console.log(cryptoList);

    return (
        <div className="CryptoList">
            <ul className="TheList">
                {liElements}
            </ul>
        </div>
    );


}

export default CryptoList;