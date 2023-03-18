const el = {
  "HELLO": "Γεία {#1}",
  "CLICK": "Κάνε κλικ στο {#1} και {#2} λογοτυπο για  περισσότερα",
  "MORE": " Περισσότερες πληροφορίεσ"
};

const en = {
  "HELLO": "Hello {#1}",
  "CLICK": "Click on the {#1} and {#2} logos to learn more",
  "MORE": "More info"
};

class Translate {
  constructor(lang) {
    this.lang = void 0;
    this.log = (_string, data) => {
      let value = this.getCurrentlyLang(_string);
      if (data) {
        for (let i = 0; i <= data.length; i++) {
          var _value;
          value = (_value = value) == null ? void 0 : _value.replace(`{#${i}}`, data[i - 1]);
        }
      }
      return console.log(value);
    };
    this.lang = lang;
  }
  getCurrentlyLang(_string) {
    let value;
    switch (this.lang) {
      case 'el':
        value = el[_string];
        break;
      case 'en':
        value = en[_string];
        break;
    }
    return value;
  }
}
const translate = Translate;
// let t = new Translate()
// t.log('MORE')

export { translate };
//# sourceMappingURL=eight.translate.modern.js.map
