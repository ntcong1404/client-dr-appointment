import "./App.css";
import Routers from "./routes/Routers";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Routers />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
