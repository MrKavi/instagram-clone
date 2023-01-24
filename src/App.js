import "./App.css";
import Login from "./components/auth/login";
import DrawerComponent from "./components/home/drawer/DrawerComponent";
import { feeds } from "./mock/feeds";
function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <DrawerComponent feeds={feeds} />
    </div>
  );
}

export default App;
