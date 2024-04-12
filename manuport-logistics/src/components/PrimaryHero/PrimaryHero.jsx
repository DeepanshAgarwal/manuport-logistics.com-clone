import "./PrimaryHero.css";
{
    /* video-https://a.storyblok.com/f/240783/x/1b03c229b0/peoplev4_compressed.mp4 */
}

export default function PrimaryHero() {
    return (
        <div className="Primary-Hero">
            <video className="primary-hero-video" autoPlay loop muted>
                <source
                    src="https://a.storyblok.com/f/240783/x/1b03c229b0/peoplev4_compressed.mp4"
                    type="video/mp4"
                />
            </video>
            <div className="primary-hero-content">
                <div className="primary-hero-content-line">Freight</div>
                <div className="primary-hero-content-line">forwarding.</div>
                <div className="primary-hero-content-line">Done</div>
            </div>
        </div>
    );
}
