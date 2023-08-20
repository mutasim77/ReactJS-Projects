
import { Container } from "./styled";
import About from "./../../components/about"
import Contact from "../../components/contact";
import Features from "../../components/features";
import Extension from "../../components/extension";
import Questions from "../../components/questions";
export default function Home() {
  return (
    <Container>
     <About/>
     <Features/>
     <Extension/>
     <Questions/>
     <Contact/>
    </Container>
  );
}
