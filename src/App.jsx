import "./App.css";
import { Navbar } from "./components/navigation/Navbar";
import AnimatedRoutes from "./components/animations/AnimatedRoutes";
// import BackgroundMusic from "./components/BackgroundMusic";
// import BackgroundAudio from "./assets/faded-electric-piano-version-180274.mp3";
import {Spacer} from "./components/navigation/Spacer";
import {PageWrapper} from "./components/animations/PageWrapper";

function App() {
  return (
    <div className="w-screen h-screen overflow-auto !left-0 !m-0 !p-0">
      {/* <BackgroundMusic src={BackgroundAudio}/> */}
      <Navbar /> {/* stays static */}
      <Spacer />
      <PageWrapper>

      <AnimatedRoutes /> {/* contains routes + animations */}
      </PageWrapper>
      <Spacer />
    </div>
  );
}

export default App;
