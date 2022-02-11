module.exports = {
  Harshify(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 -+/*%$#!&/()=.,{}´+¨*[]:;_¡?¿|°";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },

  IsJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  },

  checkTrueFalseString(str) {
    switch (str) {
      case "true":
        return true;
        break;
      case "false":
        return false;
        break;
      case "null":
        return null;
        break;
      case "undefined":
        return undefined;
        break;
      default:
        return str;
        break;
    }
  },
};
