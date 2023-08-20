import './header.scss';

const Header = () => {

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" alt="" />
                </div>
                <ul className="list-items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contant</li>
                    <li>FAQ</li>
                </ul>
                <button
                    type="button"
                    className="btn">
                    Rick</button>
            </div>
        </header>
    );

}

export default Header;