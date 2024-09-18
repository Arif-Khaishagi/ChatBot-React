import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import History from "./pages/History";
// import Footer from './pages/Footer/Footer'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="history" element={<History />} />
        {/* <Footer index element={<Footer/>} /> */}
      </Route>
      
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
