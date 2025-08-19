import { Route, Routes } from "react-router-dom";

import IndexPage from "@/routes/index";
import AboutPage from "@/routes/about";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
