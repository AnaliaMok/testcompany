import Link from "next/link";

// TODO: Properly Retrieve links
const Footer = () => (
    <footer>
        <div className="footer__links">
            <Link href="/page/terms-of-use">
                <a>Terms of Use</a>
            </Link>|
            <Link href="/page/privacy-policy">
                <a>Privacy Policy</a>
            </Link>
        </div>
        <span>&copy;2018 All Rights Reserved, Test Company</span>
    </footer>
);

export default Footer;
