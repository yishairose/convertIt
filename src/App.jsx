import { Outlet } from "react-router-dom";
import Header from "./ui/Header";
import Main from "./ui/Main";

function App() {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default App;
