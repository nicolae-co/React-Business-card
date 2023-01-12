import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare,FaGithubSquare } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer">
            <button className="footer-btn"><FaTwitterSquare /></button>
            <button className="footer-btn"><FaFacebookSquare /></button>
            <button className="footer-btn"><FaInstagramSquare /></button>
            <button className="footer-btn"><FaGithubSquare /></button>
        </div>
    )
}
export default Footer
