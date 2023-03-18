var el = {
  "HELLO": "Γεία {#1}",
  "CLICK": "Κάνε κλικ στο {#1} και {#2} λογοτυπο για  περισσότερα",
  "MORE": " Περισσότερες πληροφορίεσ"
};

var en = {
  "HELLO": "Hello {#1}",
  "CLICK": "Click on the {#1} and {#2} logos to learn more",
  "MORE": "More info"
};

var Translate = /*#__PURE__*/function () {
  function Translate(lang) {
    var _this = this;
    this.lang = void 0;
    this.log = function (_string, data) {
      var value = _this.getCurrentlyLang(_string);
      if (data) {
        for (var i = 0; i <= data.length; i++) {
          var _value;
          value = (_value = value) == null ? void 0 : _value.replace("{#" + i + "}", data[i - 1]);
        }
      }
      return console.log(value);
    };
    this.lang = lang;
  }
  var _proto = Translate.prototype;
  _proto.getCurrentlyLang = function getCurrentlyLang(_string) {
    var value;
    switch (this.lang) {
      case 'el':
        value = el[_string];
        break;
      case 'en':
        value = en[_string];
        break;
    }
    return value;
  };
  return Translate;
}();
var translate = Translate;
// let t = new Translate()
// t.log('MORE')

exports.translate = translate;
//# sourceMappingURL=index.js.map
