import styled from './Cards.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Cards = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    //! Fetch Data;
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const result = await axios('https://api.sampleapis.com/csscolornames/colors');

            setData(result.data);
            setIsLoading(false);
        };

        fetchData();
    }, []);

    //? Copy value of cards;
    const getHex = (evt) => {
        const textColor = evt.target.dataset.hex;
        navigator.clipboard.writeText(textColor).then(() => {
            const span = evt.target.lastChild;
            span.classList.add('checkmark');
            evt.target.style.pointerEvents = 'none';

            setTimeout(() => {
                evt.target.style.pointerEvents = 'auto';
                span.classList.remove('checkmark');
            }, 500);

        });
    }

    //? Show Hex by Hover
    const showHex = (evt) => {
        const textColor = evt.target.dataset.hex;
        evt.target.classList.add('show-hex');
        evt.target.setAttribute('data-after', textColor);
    }

    //? Remove Hex by going out
    const removeHex = (evt) => {
        evt.target.classList.remove('show-hex');
        span.classList.remove('checkmark');
    }

    return (
        <>
            {
                isLoading ? (
                    <div className={styled.loading} >Loading...</div >
                ) :
                    (
                        <div className={styled.cards}>
                            {data && data.map((color) => (
                                <div key={color.id}
                                    className={styled.card}
                                    data-hex={color.hex}
                                    style={{ backgroundColor: color.hex }}
                                    onClick={(evt) => getHex(evt)}
                                    onMouseEnter={(evt) => showHex(evt)}
                                    onMouseLeave={(evt) => removeHex(evt)}
                                >
                                    {color.name}
                                    <span></span>
                                </div>
                            ))}
                        </div>
                    )
            }
        </>
    )
}

export default Cards;