import { useState } from "react";
import Button from "./Button";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <main className="m-auto max-w-[500px] p-7 mt-[15%] text-center font-bold">
            <h1 className="text-2xl">Counter</h1>
            <div className="result mt-10 text-5xl">{counter}</div>
            <div className="flex gap-5 justify-center mt-10">
                <Button counter={counter} setCounter={setCounter}>Inc</Button>
                <Button counter={counter} setCounter={setCounter}>Dec</Button>
                <Button counter={counter} setCounter={setCounter}>Res</Button>
                <Button counter={counter} setCounter={setCounter}>Rand</Button>
            </div>
        </main>
    )
}

export default Counter;

