import './styles.css'

function StepsHeader() {
    return (
        <header className="orders-steps-container">
            <div className="orders-steps-content">
                <h2 className="orders-steps-title">SIGA AS<br/>ETAPAS</h2>
                <ul className="steps-item">
                    <li>
                        <span id="step-number">1</span>
                        <p>Selecione os produtos e localização.</p>
                    </li>
                    <li>
                        <span id="step-number">2</span>
                        <p>Depois clique em <strong>“ENVIAR PEDIDO”</strong></p>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default StepsHeader;