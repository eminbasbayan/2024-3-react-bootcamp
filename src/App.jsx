import { Toaster } from "react-hot-toast";
import CategoryManagement from "./components/Firebase/CategoryManagement";
import Header from "./components/Layout/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="app container mx-auto">
      <Toaster />
      <Header />
      <div className="content mt-5">
        <LoginPage />
      </div>
    </div>
  );
}

export default App;
