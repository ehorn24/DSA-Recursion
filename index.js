const countSheep = function (num) {
  if (num === 0) {
    console.log("All sheep have jumped over the fence.");
  } else {
    console.log(num + ": Another sheep jumps over the fence.");
    countSheep(num - 1);
  }
};

const powerCalculator = function (base, exp) {
  if (exp < 0) {
    return "Exponent should be >= 0.";
  } else if (exp === 0) {
    return 1;
  } else {
    return base * powerCalculator(base, exp - 1);
  }
};

const reverseString = function (string) {
  if (string === "") {
    return "";
  } else {
    return reverseString(string.substr(1)) + string.charAt(0);
  }
};

const triangleNum = function (num) {
  if (num === 0) {
    return 0;
  } else {
    return num + triangleNum(num - 1);
  }
};

let arr = [];
const stringSplitter = function (string, sep) {
  if (!string.includes(sep)) {
    arr.push(string);
  } else {
    arr.push(string.substring(0, string.indexOf(sep)));
    stringSplitter(
      string.substring(string.indexOf(sep) + 1, string.length),
      sep
    );
  }
  return arr;
};
