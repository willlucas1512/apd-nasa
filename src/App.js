import { BrowserRouter } from "react-router-dom";
import Background from "./components/Background/Background";
import Routes from "./components/Routes";

function App() {
  return (
    <BrowserRouter>
      <Background />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
