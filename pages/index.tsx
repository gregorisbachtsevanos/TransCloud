import { useState } from "react";

import s from "@/styles/Home.module.css";

import { languageChanger } from "@/utils/languageChanger";
import { En } from "@/lang/en";
import { El } from "@/lang/el";

interface HomeProps {
  languageChanger: () => void;
}

const Home: React.FC<HomeProps> = () => {
  const [lang, setLang] = useState(En);

  const translate = () => {
    // TODO: set local storage for lang
    const preferableLang = lang === En ? El : En;
    setLang(preferableLang as any);
  };

  return (
    <div className={s.main}>
      <button onClick={translate}>language</button>

      <h1>Vite + React</h1>
      <p className="read-the-docs">{languageChanger(lang.CLICK)}</p>
    </div>
  );
};

export default Home;
