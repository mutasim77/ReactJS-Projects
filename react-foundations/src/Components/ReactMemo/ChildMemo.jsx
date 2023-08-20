import { memo } from "react";

const ChildMemo = memo(({ name }) => {
    console.log('Child Rendered');
    return (
        <div>Child Component: <b>{name}</b></div>
    )
})

export default ChildMemo;
