import "./OrderSummary.css";

function OrderSummary(props){
    return (
        <div className="order-summary">
            <h2>Order Summary</h2>
            {
               props.scoopsSelected === 0 ?
                <p className="empty-message">Your order is empty</p> :
                <p>Total scoops: {props.scoopsSelected}</p>
            }
            <p className="price">
                Price: {props.scoopsSelected * 5}₪
            </p>
        </div>
    )
}

export default OrderSummary;