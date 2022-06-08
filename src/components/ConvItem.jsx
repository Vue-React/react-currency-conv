import React, { useState, useEffect } from 'react';
import arrow from '../img/arrow-forward.svg'

const ConvItem = ({ccy, base_ccy, buy, sale}) => {

    const [typed, setTyped] = useState(1)
    const [option, setOption] = useState(ccy)
    const [result, setResult] = useState(buy)
    const [resultCur, setResultCur] = useState(base_ccy)
    let value;

    function inputChanged(e) {
        // оставляем только цыфры и точку
        value = e.target.value.replace(/[^.\d]+/g,"").replace( /^([^.]*\.)|\./g, '$1' )
        setTyped(value)
    }

    function optionChanged(e) {
        setOption(e.target.value)
    }

    function calculate() {
        if(option === ccy) {
            value = typed * buy
            setResultCur(base_ccy)
        } else {
            value = typed / sale
            setResultCur(ccy)
        }

        setResult(value.toFixed(2))
    }

    useEffect(() => {
        calculate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputChanged, optionChanged])

    return (
        <div>
            <input type="text" value={typed} onChange={inputChanged}/>
            <select value={option} onChange={optionChanged}>
                <option value={ccy}>{ccy}</option>
                <option value={base_ccy}>{base_ccy}</option>
            </select>
            <img src={arrow} alt="Arrow Forward"/>
            <div className="result">
            {result} {resultCur}
            </div>
        </div>
    )
}

export default ConvItem;