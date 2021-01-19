import './styles.css'
import {ReactComponent as MainImage} from './main.svg' 
import Footer from '../Footer'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <>
        <div className="home-container">
            <div className="home-content">
                <div className="home-actions">
                    <h2>Faça seu pedido <br /> que entregamos <br /> pra você!!!</h2>
                    <p>Escolha o seu pedido e em poucos minutos <br /> levaremos na sua porta.</p>
                    <Link to="/orders" id="make-order-btn">FAZER PEDIDO</Link>
                </div>
                <div className="home-image">
                    <MainImage id="main-image"/>
                </div>
            </div>
        </div>
        <div className="footer-homepage">
        <Footer/>
        </div>
        </>
    )
}

export default Home