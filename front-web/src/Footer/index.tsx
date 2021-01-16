import './styles.css'
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai'

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <p>App desenvolvido durante a 2ª ed. do evento Semana DevSuperior</p>
                <div className="footer-buttons">
                    <a href="https://www.linkedin.com/in/luciano-figueiredo/" target="_new"><AiOutlineLinkedin id="btn-footer"/></a>
                    <a href="https://www.instagram.com/lucian_erick/?hl=pt-br" target="_new"><AiOutlineInstagram id="btn-footer"/></a>
                    <a href="https://github.com/LucianErick" target="_new"><AiOutlineGithub id="btn-footer"/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer