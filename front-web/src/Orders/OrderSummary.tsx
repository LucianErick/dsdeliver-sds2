import { formatPrice } from "./helpers";

type Props = {
    amount: number;
    totalPrice: number;
    onSubmit: () => void;
}

function OrderSummary({amount, totalPrice, onSubmit}: Props) {

    return (
        <div className="order-summary-container">
            <div className="order-summary-content">
                <div className="amount-container">
                    <span className="amount-selected-container">
                        <strong>{amount} </strong>
                     PEDIDOS SELECIONADOS
                 </span>
                    <span className="amount-value-container">
                        <strong>{formatPrice(totalPrice)} </strong>
                     VALOR TOTAL
                </span>
                </div>
                <button 
                className="make-order-btn"
                onClick = {onSubmit}
                
                >ENVIAR PEDIDO</button>
                
            </div>
        </div>
    )
}

export default OrderSummary;