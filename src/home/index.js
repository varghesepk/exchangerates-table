import React, { Component } from 'react';
import './home.css';
import Header from '../shared/Header';
import RateTable from '../shared/RateTable';
import {getExchangeRates, getCurrencyNames} from '../services';

class Home extends Component {
    state = { 
        exchangeRates: [],
        currencyNames: getCurrencyNames()
    }
    componentDidMount() {
        getExchangeRates().then(rates => {
            this.setState({
                exchangeRates: rates
            })
        })
    }
    render() { 
        const {exchangeRates, currencyNames} = this.state;
        return ( 
            <div className="container">
                <Header title="Exchange Rates Table" />
                <RateTable exchangeRates={exchangeRates} currencyNames={currencyNames} />
            </div>
        );
    }
}
 
export default Home;
