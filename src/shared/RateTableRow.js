import React from 'react';

const RateTableRow = (props) => {
    return (
        <tr className="grey-bg">
            <td className="font-big">1 {props.baseCurrency} = </td>
            {props.currencyNames.map(curr => (
                <td key={curr} className={curr===props.baseCurrency ? 'text-grey-light' : 'text-black'}>{props.tdData[curr].toFixed(4)}</td>
            ))}
        </tr>
    )
}

export default RateTableRow;
