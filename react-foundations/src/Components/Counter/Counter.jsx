import { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import './counter.css';

const Button = styled.button`
    padding: .5em 1em;
    color: #fff;
    background-color: #5458d9;
`;

const Counter = ({ counter }) => {

    const [count, setCount] = useState(counter);

    const incCounter = () => {
        setCount(count => count + 1)
    }

    const decCounter = () => {
        setCount(count => count - 1)
    }

    const resCounter = () => {
        setCount(counter)
    }

    const randCounter = () => {
        setCount(Math.floor(Math.random() * (100 - 1) + 1));
    }

    return (
        <Container className="mt-5 mb-5">
            <div className=" d-flex flex-column gap-2 con">
                <div className="input mb-4">{count}</div>
                <div className="d-flex">
                    <Button onClick={incCounter}>Inc+</Button>
                    <Button onClick={decCounter}>Dec-</Button>
                    <Button onClick={randCounter}>Rnd</Button>
                    <Button onClick={resCounter}>Reset</Button>
                </div>
            </div>
        </Container>
    )

}

export default Counter;