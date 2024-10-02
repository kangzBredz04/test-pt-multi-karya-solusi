import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header>ini header</header>
      <Outlet />
      <footer>ini footer</footer>
    </>
  );
}

export default App;
