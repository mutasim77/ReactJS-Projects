import { useReducer } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const initialState = { counter: 0 };
const reducer = (state, action) => {
    switch (action.type) {
        case 'INC':
            return { counter: state.counter + 1 }
        case 'DEC':
            return { counter: state.counter - 1 }
        case 'RAN':
            return { counter: Math.round(Math.random() * (100 - 50) + 50) }
        case 'RES':
            return { counter: 0 }
        default:
            throw new Error('No action!')
    }
}

const CounterReducer = () => {
    const [counter, dispatch] = useReducer(reducer, initialState);

    return (

        <Container className="mb-5 mt-5 d-flex justify-content-center flex-column gap-4 align-items-center border">
            <Row className="d-flex gap-2">
                <Button variant="warning" onClick={(e) => dispatch({ type: e.target.textContent })}>INC</Button>
                <Button variant="primary" onClick={() => dispatch({ type: 'DEC' })}>DEC</Button>
                <Button variant="secondary" onClick={() => dispatch({ type: 'RAN' })}>RAN</Button>
                <Button variant="danger" onClick={() => dispatch({ type: 'RES' })}>RES</Button>
            </Row>

            <Row className="result fs-1">{counter.counter}</Row>
        </Container>
    )
}

export default CounterReducer;
