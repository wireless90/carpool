import { ThemeProvider } from "@mui/material";
import MasterPage from "./pages/MasterPage";
import theme from "./theme";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <MasterPage/>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
