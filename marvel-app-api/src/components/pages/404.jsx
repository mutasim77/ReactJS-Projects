import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            Page does not exist;
            <Link to={'/'}>Go back</Link>
        </div>
    )
}

export default Page404;
