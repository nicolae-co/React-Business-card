import { FaEnvelope, FaLinkedin } from "react-icons/fa";

function Contact() {
    const iconStyle = {
        marginRight: 10,
        fontSize: 16
    }
    return (
        <div className="contact">
            <h1 className="contact--name">Nicolae Cojocaru</h1>
            <h3 className="contact--function">Frontend Developer</h3>
            <h5 className="contact--website">nicolaeCo.website</h5>
            <div className="contact--btns">
                <button className="contact--btns-email"><FaEnvelope style={iconStyle} />Email</button>
                <button className="contact--btns-linkedin"><FaLinkedin style={iconStyle}/>LinkedIn</button>
            </div>
        </div>
    )
}

export default Contact
