import { createBrowserRouter } from "react-router-dom";
import { Root, Slider, ParentMemo, CounterReducer, Counter, CustomForm } from '../Components';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "slider",
                element: <Slider />,
            },
            {
                path: "react-memo",
                element: <ParentMemo />,
            },
            {
                path: "reducer-hook",
                element: <CounterReducer />,
            },
            {
                path: "counter",
                element: <Counter />,
            },
            {
                path: "formik",
                element: <CustomForm />,
            }
        ],
    }
]);
