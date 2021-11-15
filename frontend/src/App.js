import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Route path="/" component={HomeScreen} />
      <Footer />
    </div>
  );
};

export default App;
