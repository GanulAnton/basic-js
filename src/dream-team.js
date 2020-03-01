module.exports = function createDreamTeam(arr) {
  var DtArr = [];
  var letter;
  var Dt;
  if (!Array.isArray(arr)) {
    return false;
  }
  arr.forEach(function(el) {
    if (typeof el == "string") {
      el = el.replace(/\s+/g, "");
      letter = el[0];
      DtArr.push(letter.toUpperCase());
    }
  });
  Dt = DtArr.sort().join("");
  return Dt;
};
