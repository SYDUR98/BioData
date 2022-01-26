import logo from './logo.svg';
import './App.css';
import BioData from './components/BioData';
import Blog from './components/blog';


function App() {
  return (
    <div className="App">
     <BioData
     name = "sydur"
     gmail = "md444sydur@gmail.com"
     phone = "01746077593"
     github = "sdjklfjk"
     skills = {["python","js"]}
     intersts = {["coding","leasing song","Kurulus Osman seris","the release eartugrul"]}
     />
     <Blog
     name = "sydur"
     engi = "computer engineer"
     />
    </div>
  );
}

export default App;
