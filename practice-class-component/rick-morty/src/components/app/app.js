import { Fragment } from "react";
import Header from "../header/header";
import Card from "../card/card";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    return (

        <Fragment>
            <Header />
            <div className="container">
                <Card />
            </div>
        </Fragment>

    )
}

export default App;
