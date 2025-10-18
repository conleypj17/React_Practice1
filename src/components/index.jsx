// single selection
// multiple selection
import React, { useState } from 'react';
import data from './data';
import './styles.css';

export default function GreatestBasketballPlayer() {

    const [selected, setSelected] = useState(null);

    function handleSingleSelection(getCurrentId) {
        //console.log(getCurrentId)
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }
    return (
        <div className="wrapper">
            <div className="GreatestBasketballPlayer">
                {
                    data && data.length > 0 ? (
                        data.map(dataItem => <div className='item'>
                            <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                                <div>
                                    {selected === dataItem.id ?
                                        <div className="content">
                                            {dataItem.answer}
                                        </div>
                                        : null}
                                </div>

                            </div>

                        </div>
                        )
                    )
                        : <div>No data available</div>
                }
            </div>
        </div>
    );
}