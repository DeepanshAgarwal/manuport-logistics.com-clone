import "./HwmSection.css";
import { useEffect, useState, useRef } from "react";
import image1 from "../../assets/Cargo-Barging-Business.webp";
import image2 from "../../assets/Cargo-Plane-Business.webp";
import image3 from "../../assets/Cargo-Ship-Business.webp";
import image4 from "../../assets/Cargo-Truck-Business.webp";

export default function HwmSection() {
    const images = [image1, image2, image3, image4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % images.length
            );
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Add the 'visible' class when the element is in the viewport
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            },
            {
                // Trigger the callback when the element is 50% visible
                threshold: 0.5,
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        // Cleanup
        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <div className="HwmSection">
            <div className="hwm-content">
                <div className="hwm-content-title">How we move</div>
                <div className="hwm-content-description">
                    Manuport Logistics offers a different approach to shipping,
                    guided by creative thinking. Ship, barge, plane, train,
                    truck, or a combination. For you, we move mountains.
                </div>
                <div className="hwm-content-btn-wrapper">
                    <div className="hwm-content-btn">Discover our services</div>
                </div>
            </div>
            <div ref={elementRef} className="hwm-images">
                <img
                    key={currentImageIndex}
                    className="hwm-images-img"
                    src={images[currentImageIndex]}
                    alt=""
                />
            </div>
        </div>
    );
}
