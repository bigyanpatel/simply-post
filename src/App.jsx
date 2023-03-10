import "./App.css";
import { Navbar } from "./components/componentExport";
import { useSelector } from "react-redux";
import { AppRoutes } from "./routes/AppRoutes";

const App = () => {
  const {
    auth: { token },
  } = useSelector((state) => state);

  return (
    <div className="font-roboto">
      {token && <Navbar />}
      <AppRoutes />
    </div>
  );
};

export default App;