import React from 'react';

const Header = ({rates}) => {
    return (
        <div className="header">
            <h2>Курси валют:</h2>
            <div className="row">
                <div> </div>
                <div>Купівля</div>
                <div>Продаж</div>
            </div>

            {rates.length
            ? <div>
                {rates.map(rate => 
                    <div key={rate.ccy} className="row">
                        <div>{rate.ccy}<span className="gray"> - {rate.base_ccy}</span></div>
                        <div>{rate.buy}</div>
                        <div>{rate.sale}</div>
                    </div>
                )}
            </div>
            : <div>Получение данных...</div>
            }
        </div>
    )
}

export default Header;