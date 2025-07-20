import React from "react";
function Header(props) {
    let totalAmount = props.cartData.cartData.reduce((total, item) => (
        total + (item.count * item.price)
    ), 0)
    return (
        <>
            {props.cartData.cartData.length > 0 && (
                <div style={{ marginBottom: '20px' }}>
                    <h3>Cart Summary:</h3>
                    <ul>
                        {props.cartData.cartData.map((item, index) => (
                            <li key={index}>
                                <strong>{item.name}</strong> - {item.count} x ₹{item.price} = ₹{item.count * item.price}
                            </li>
                        ))}

                    </ul>
                    <div>-----------------------------------</div>
                    <div><strong>Total </strong> =
                        {totalAmount}
                    </div>
                </div>

            )
            }
        </>
    )
}
export default Header