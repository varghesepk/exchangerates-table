import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RateTable.css';
import RateTableRow from './RateTableRow';

class RateTable extends Component {

    loadTableHeader() {
        const {currencyNames} = this.props;
        return (
            <thead>
                <tr className="blue-bg">
                    <th></th>
                    {currencyNames.map(name => (
                        <th key={name} className="text-blue">{name}</th>
                    ))}
                </tr>
            </thead>
        )
    }

    loadTableRow(exchangeRates, currencyNames, currency) {
        let filteredArray = exchangeRates.filter(obj => {
            return obj.base === currency;
        })
        return filteredArray.map(arr => {
            let rates = arr.rates;
            return (
                <RateTableRow key={currency} baseCurrency={currency} tdData={rates} currencyNames={currencyNames}></RateTableRow>
            )
        })
    }

    render() { 
        const {exchangeRates, currencyNames} = this.props;
        return (
            <table>
                {this.loadTableHeader()}
                <tbody>
                    {currencyNames.map(currency => this.loadTableRow(exchangeRates, currencyNames, currency))}
                </tbody>
            </table>
        );
    }
}

RateTable.propTypes = {
    exchangeRates: PropTypes.array,
    currencyNames: PropTypes.array
}
 
export default RateTable;