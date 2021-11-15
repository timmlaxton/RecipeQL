import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import InstructionScreen from "./screens/InstructionScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/recipe/:id" element={<InstructionScreen />} exact />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
