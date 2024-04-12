import React, { useState, useEffect } from "react";
import "./UspSection.css";

export default function UspSection() {
    const [visibleIndex, setVisibleIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            const newIndex = (visibleIndex + 1) % 4;
            setVisibleIndex(newIndex);
            setCurrentImage(images[newIndex]);
            setProgress(0);
        }, 15000); // Change this line
        const progressTimer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress >= 100 ? 0 : prevProgress + 0.1
            );
        }, 15); // Change this line
        return () => {
            clearInterval(timer);
            clearInterval(progressTimer);
        };
    }, [visibleIndex]);

    const titles = [
        "We Believe in People",
        "We Solve Each and Any Shipping Problem",
        "Single Point of Contact",
        "Flexible & Fast Decision-Making",
    ];

    const contents = [
        `We believe in our people because they are our greatest
        asset. At MPL, we are not just a company; we are a
        family. Each and every one of us shares our unique MPL
        culture, in which everyone is valued, supported, and
        empowered to reach their full potential.`,
        `We work with teams per commodity, each with specific
        domain expertise, to provide high-quality solutions or
        knowledge for any product or request. With offices
        around the world, we have excellent knowledge of local
        markets, laws, and customs.`,
        `Our colleagues assist and guide customers from end to
        end in all logistics processes, including customs
        clearance and tender and procurement services.`,
        `Our flexibility and desire to help customers in any way
        possible really sets us apart. Our fast decision-making
        comes from the open internal communication strategy we
        follow.`,
    ];
    const images = [
        "https://a.storyblok.com/f/240783/424x283/78ab1c3609/we-believe-in-people-compressed-2.png/m/1024x560",
        "https://a.storyblok.com/f/240783/1890x1417/fc3f9f86ec/aircharter-2.png/m/1024x560",
        "https://a.storyblok.com/f/240783/632x796/2481202365/sandra.jpg/m/1024x560",
        "https://a.storyblok.com/f/240783/1920x781/6e425f1422/untitled_compressed.png/m/1024x560",
    ];

    const [currentImage, setCurrentImage] = useState(images[0]);

    return (
        <div className="UspSection">
            <div className="usp-left">
                <p>We're Different Because</p>
                <div className={`image-container image-${visibleIndex}`}>
                    <img src={currentImage} />
                </div>
            </div>
            <div className="usp-right">
                {titles.map((title, index) => (
                    <div
                        className={`usp-item usp-item-${index + 1}`}
                        key={index}
                    >
                        <div
                            className={`usp-item-title usp-item-title-${
                                index + 1
                            } ${visibleIndex === index ? "" : "inactive"}`}
                        >
                            {title}
                        </div>
                        <div
                            className={`usp-item-content usp-item-content-${
                                index + 1
                            }`}
                            style={{
                                display:
                                    visibleIndex === index ? "block" : "none",
                            }}
                        >
                            {contents[index]}
                        </div>
                        <progress
                            className={`usp-item-progress usp-item-progress-${
                                index + 1
                            } ${visibleIndex === index ? "" : "inactive"}`}
                            max="100"
                            value={visibleIndex === index ? progress : 0}
                        ></progress>
                    </div>
                ))}
            </div>
        </div>
    );
}
