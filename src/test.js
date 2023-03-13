//! class working sample
var Translate = /** @class */ (function () {
    function Translate() {
    }
    Translate.prototype.lang = function (_string, data) {
        console.log(_string);
    };
    return Translate;
}());
var t = new Translate();
t.lang('test123');
//! it's working. need proper structure
var lang = function (string, data) {
    var EL = Object.freeze({
        HELLO: "Hello word",
        CLICK: "Click on the Vite and React logos to learn more"
    });
    var EN = Object.freeze({
        HELLO: "Γεία",
        CLICK: "Κάνε κλικ για περισσότερα"
    });
    var test = 'this {#1} is {#2} a test {#3}';
    var l = 'EN';
    var lan = l === 'EL' ? EL : EN;
    if (data) {
        for (var i = 0; i <= data.length; i++) {
            test = test.replace("{#".concat(i, "}"), data[i - 1]);
        }
        console.log(lan.CLICK);
        return console.log("".concat(string, " ").concat(test));
    }
    return console.log(string);
};
lang('hello', [1, 5, 6]);
