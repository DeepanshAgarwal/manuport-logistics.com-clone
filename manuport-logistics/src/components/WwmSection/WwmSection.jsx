import React, { useState, useEffect, useRef } from "react";
import image1 from "../../assets/Building-Materials-Business.webp";
import image2 from "../../assets/Chemical-Business.webp";
import image3 from "../../assets/Consumer-Goods-Business.webp";
import image4 from "../../assets/Flooring-Business.webp";
import image5 from "../../assets/Glass-Business.webp";
import image6 from "../../assets/Minerals-Business.webp";
import image7 from "../../assets/Steel-Business.webp";
import image8 from "../../assets/ProjectCargo-Business.webp";
import image9 from "../../assets/Renewables-Business.webp";
import image10 from "../../assets/Sugar-Business.webp";
import image11 from "../../assets/Windmill-Business.webp";
import image12 from "../../assets/Wood-Business.webp";

import "./WwmSection.css";

export default function WwmSection() {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % images.length
            );
        }, 3000); // change image every 3 seconds

        return () => clearInterval(intervalId); // cleanup on unmount
    }, []);

    return (
        <div className="WwmSection">
            <div className="wwm-images">
                <img
                    key={currentImageIndex}
                    className="wwm-images-img"
                    src={images[currentImageIndex]}
                    alt=""
                />
            </div>
            <div className="wwm-content">
                <div className="wwm-title">What we Move</div>
                <div className="wwm-description">
                    Behind every shipment lies a world of possibilities. Whether
                    it's raw materials, chemicals, consumer goods, or anything
                    else. What we ship isn’t just cargo, we carry your dreams.
                </div>
                <div className="wwm-btn-wrapper">
                    <div className="wwm-btn">About our Commodities</div>
                </div>
            </div>
        </div>
    );
}
