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
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
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

//* TypeScript playground\
//* https://www.typescriptlang.org/play?#code/MYewdgzgLgBApmGBeGBvGAiAEgUQDJ4DyGAXJlnADaUhoDEAjAL4YA0mAsoQEo6mcgATnBgBLMADMQbAFAxMAYTwBJBQGl+GBZVHAA1jHAwoACxGpGTGAEMwAE3oAmKzQDmICMdqU41wYgBbITgMGCYAbhlQSFgqZDRyfCJNQGTgQFbgQHrgQEbgemY2Th4+MlDAAuA0wEHgQE7gQGHgasAZ4EAR4Aq0wCHgGEAB4EBu4EB24HLAfuBAMeA+8oy06tl5LRV1TUAs4EAa4EBe4DSYQC7gTsrVmGqGvtyrVazKpytOvsBm4D6GwFHgdr3zypyOipr6pvKs0IiZKMprCE8ABVBLYIH8oOY5PIYFD5H8wK54gAKAD60EE4lcZHRmPYdmsUGsAH4yLYAJ4ASmQAD40LCYAA3PyM6yUACuIhQCAA2mioBiETZPHo4GSQBJjGSAA5wcXwMAAXXpoglSPxhIpqHp0PkKqRUGlsol6usMAAhCgAOQgABGACs4MAoJbNdqddDhFA2f4YNEICAfAA6NxIpnsuCB4RSv7AOBIgAGFmY8bxBOsFIpbvkTCzMCkgiRPlgoniAAZwmIYAAeFAm4MIVymCuiADULdd7s7LPD8TDHMjcGj1ljCYsABJUKImEwUzATdzRABaBgKzNdsL0z3exC+8D+oMhvtwTP0nM6rc+v0BiMhnl8gWI-4wEViiUGmVyhCrmQ5nMyIvGPEYBwAA7jAwKguCcaZlAwa2K4SKWlwvAukAA

// const en = { "HELLO": "Hello {#1}", "MORE": "More info",
//   "CLICK": "Click on the {#1} and {#2} logos to learn more" };
// const el = { "HELLO": "Γεία {#1}", "MORE": " Περισσότερες πληροφορίεσ",
//   "CLICK": "Κάνε κλικ στο {#1} και {#2} λογοτυπο για  περισσότερα" };

// class Translate {

//     lang = (_string: string, data?: any) => {
//     var value = en[_string as keyof typeof en]
//     if (data){
//          if(typeof data != 'object'){
//             return console.log(value.replace(`{#1}`, data))
//         }
//         for(let i = 0; i <= data.length; i++){
//             value = value.replace(`{#${i}}`, data[i-1])
//         }
//     return  console.log(value)

//     }
//     return console.log(en[_string as keyof typeof en])
// }
// }

// let t = new Translate()
// t.lang('MORE')
