import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/home";
import Features from "./components/features";
import Contact from "./components/contact";
import Extension from "./components/extension";
import { tema } from "./theme/theme";
import Header from "./components/header";
import Footer from "./components/footer";
import SucessoEmail from "./components/sucessoEmail";
import Login from "./components/login";

function App() {
  return (
    <ThemeProvider theme={tema}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/extension" element={<Extension />} />
        <Route path="/sucessoEmail" element={<SucessoEmail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
