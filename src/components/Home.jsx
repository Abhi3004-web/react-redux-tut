import React from "react";
import { useState } from "react";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";
import img7 from "../img/7.jpg";
import img8 from "../img/8.jpg";


function Home(props) {
    const imageList = [
        { id: 1, name: "Image 1", src: img1, price: 1000 },
        { id: 2, name: "Image 2", src: img2, price: 500 },
        { id: 3, name: "Image 3", src: img3, price: 600 },
        { id: 4, name: "Image 4", src: img4, price: 2500 },
        { id: 5, name: "Image 5", src: img5, price: 900 },
        { id: 6, name: "Image 6", src: img6, price: 250 },
        { id: 7, name: "Image 7", src: img7, price: 400 },
        { id: 8, name: "Image 8", src: img8, price: 300 },

    ];
    const [counts, setCounts] = useState(Array(imageList.length).fill(0));
    const increment = (index, image) => {
        const newCounts = [...counts];
        newCounts[index]++;
        setCounts(newCounts);
        props.addToCartHandler({ price: image.price, name: image.name, count: newCounts[index] })
    };

    const decrement = (index, image) => {
        const newCounts = [...counts];
        if (newCounts[index] > 0) newCounts[index]--;
        setCounts(newCounts);
        props.addToCartHandler({ price: image.price, name: image.name, count: newCounts[index] })
    };
    return (
        <div style={{ padding: "20px" }}>
            <h2>Image List with Counter</h2>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {imageList.map((image, index) => (
                    <li key={image.id} style={{ marginBottom: "20px" }}>
                        <img
                            src={image.src}
                            alt={image.name}
                            style={{ width: "200px", height: "150px" }}
                        />
                        <div style={{ marginTop: "10px" }}>
                            <button onClick={() => decrement(index, image)}>-</button>
                            <span style={{ margin: "0 10px" }}>{counts[index]}</span>
                            <button onClick={() => increment(index, image)}>+</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Home