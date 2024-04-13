import NavBar from "./components/NavBar/NavBar";
import PrimaryHero from "./components/PrimaryHero/PrimaryHero";
import UspSection from "./components/UspSection/UspSection";
import LocationsSection from "./components/LocationsSection/LocationsSection";
import HwmSection from "./components/HwmSection/HwmSection";
import WwmSection from "./components/WwmSection/WwmSection";
import "./App.css";

function App() {
    return (
        <>
            <NavBar />
            <PrimaryHero />
            <UspSection />
            <LocationsSection />
            <HwmSection />
            <WwmSection />
        </>
    );
}

export default App;
