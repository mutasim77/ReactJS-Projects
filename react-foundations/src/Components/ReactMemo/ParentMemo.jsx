import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import ChildMemo from "./ChildMemo";
import { useState } from "react";

const ParentMemo = () => {
    const [inputValue, setInputValue] = useState('');
    const [name, setName] = useState('Mutasim');
    console.log('Parent Rendered');

    const onHandleChange = (e) => {
        setInputValue(e.target.value);
    }

    const onHandleClick = () => {
        setName(inputValue);
    }

    return (
        <Container>
            <ChildMemo name={name} />
            <input
                type="text"
                onChange={(e) => onHandleChange(e)}
            />
            <Button onClick={onHandleClick}>Send To Child</Button>
            <div className="result">{inputValue}</div>
        </Container>
    )
}

export default ParentMemo;
