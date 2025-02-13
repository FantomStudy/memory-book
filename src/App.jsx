import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/Routers";
import Header from "./global/Header/Header";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header />
      {/* <ToastContainer /> */}
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
