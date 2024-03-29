import './Footer.scss';

interface FooterProps {
    className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={className}>
            <p className="footer">&copy; {currentYear} Joey Thompson. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;