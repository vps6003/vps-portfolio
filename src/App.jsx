import "./App.css";
import { Navbar } from "./components/navigation/Navbar";
import AnimatedRoutes from "./components/animations/AnimatedRoutes";

function App() {
  return (
    <>
      <Navbar /> {/* stays static */}
      <AnimatedRoutes /> {/* contains routes + animations */}
    </>
  );
}

export default App;
