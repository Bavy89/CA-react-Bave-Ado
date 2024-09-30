import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout/Layout";
import Router from "./routes/Router";
import { useSelector } from "react-redux";
import SpinnerComponent from "./components/global/SpinnerComponent";

function App() {
  const { isLoading } = useSelector((state) => state.loader);
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Router />
          {isLoading && <SpinnerComponent />}
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
