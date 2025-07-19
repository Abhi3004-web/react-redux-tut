import React from "react";
function Header(props) {
    return (
        <>
            {props.cartData.cartData.length > 0 && (
                <div style={{ marginBottom: '20px' }}>
                    <h3>Cart Summary:</h3>
                    <ul>
                        {props.cartData.cartData.map((item, index) => (
                            <li key={index}>
                                {item.name} - Count: {item.count}
                            </li>
                        ))}
                    </ul>
                </div>
            )
            }
        </>
    )
}
export default Header