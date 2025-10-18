// single selection
// multiple selection
import React, { useState } from 'react';
import data from './data';

export default function GreatestBasketballPlayer() {

    const [selected, setSelected] = useState(null);
    return (
        <div className="wrapper">
            <div className="GreatestBasketballPlayer">
                {
                    data && data.length > 0 ? (
                        data.map(dataItem => <div className='item'>
                            <div className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>

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