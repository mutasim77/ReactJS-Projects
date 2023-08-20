import Header from '../Components/UI/Header';
import { Outlet } from 'react-router-dom';

const Root = () => (
    <>
        <Header />
        <Outlet />
    </>
)

export default Root;
