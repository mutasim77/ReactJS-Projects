import './Footer.css'
import './ResponsiveFooter.css'

export const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="leftContent">
                <p>&copy; Copyright 2019 Stack. All Rights Reserved </p>
                </div>

                <div className="rigthContent">
                    <p><a href='./'>Privacy Policy</a></p>
                    <p><a href='./'>Terms and Conditions</a></p>
                </div>

            </div>
        </footer>
    )
}