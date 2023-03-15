import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { languageChanger } from "./utils/languageChanger";
import { El } from "./lang/el";
import { En } from "./lang/en";

interface Props {
  languageChanger: () => void;
}

const App: React.FC<Props> = () => {
  const [lang, setLang] = useState(En);

  const translate = () => {
    // TODO: set local storage for lang
    const preferableLang = lang === En ? El : En;
    setLang(preferableLang as any);
  };

  return (
    <div className="App">
      <button onClick={translate}></button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p></p>
      </div>
      <p className="read-the-docs">{languageChanger(lang.CLICK)}</p>
    </div>
  );
};

export default App;
