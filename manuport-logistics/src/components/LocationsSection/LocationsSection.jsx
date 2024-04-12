import "./LocationsSection.css";

export default function LocationsSection() {
    return (
        <div className="LocationsSection">
            <div className="loc-sec-content">
                Around the world, our teams are dedicated to meeting your
                logistics needs. As part of the{" "}
                <span style={{ color: "#335da3", textDecoration: "underline" }}>
                    Euroports Group
                </span>
                , we can leverage group assets to support our solutions and add
                financial stability and flexibility, which is all to your
                benefit. Spin the globe and find your location.
            </div>
            <span className="loc-sec-btn-wrapper">
                <div className="loc-sec-btn">All Locations</div>
                <div className="loc-sec-icon"></div>
            </span>
        </div>
    );
}
