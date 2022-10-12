import React, {Component} from 'react';
import './Crypto.css'

import axios from 'axios';
import CryptoList from './CryptoList';

class Crypto extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cryptoList: []
        }; 
    }

    componentDidMount() {
        this.getCryptoData();
    }

    getCryptoData = () => {

        axios.get('https://blockchain.info/ticker')
            .then(res => {
                const tickers = res.data;

                this.setState((state) => {
                    let newCryptoList = [];
                    
                    for (const [ticker, cryptoRate] of Object.entries(tickers)) {

                        let lastCryptoObj = state.cryptoList.find((cryptoObj) => {
                            return(cryptoObj.currency === ticker);
                        });

                        // console.log(lastCryptoObj);

                        let newCryptoObj = {
                            currency: ticker,
                            symbol: cryptoRate.symbol,
                            buy: cryptoRate.buy,
                            sell: cryptoRate.sell,
                            lastRate: cryptoRate.last,
                        }

                        if (lastCryptoObj !== undefined) {

                        } else {
                            newCryptoObj.cssClass = 'blue';
                            newCryptoObj.htmlArray = String.fromCharCode(8596);
                            
                            
                        }
                        
                        console.log(newCryptoObj);

                        newCryptoList.push(newCryptoObj);
                        
                        console.log(newCryptoObj);

                        console.log(newCryptoList);
                    }

                    return({
                        cryptoList: newCryptoList
                    })                    
                });

                // console.log(res.data);
            });
    }

    render() {
        return(
            <div className="Crypto">
                <CryptoList cryptoList={this.state.cryptoList} />
           
            </div>
        );
    }
}

export default Crypto;