import React from 'react';
import ConvItem from "../components/ConvItem";

const Converters = ({rates}) => {

    return (
        <div className="converter">
            <h2>Конвертер</h2>

            {rates.map(rate =>
                <ConvItem key={rate.ccy} ccy={rate.ccy} base_ccy={rate.base_ccy} buy={rate.buy} sale={rate.sale} />
            )}
        </div>
    )
}

export default Converters;