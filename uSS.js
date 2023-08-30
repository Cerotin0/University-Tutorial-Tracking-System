function uS() {
    link = "ÎÑÑËÔÊÉÕÕÚÖÕÈÖÖÓÆÃÖÉÑËÛÎÇÌÒ¥ÉÓÖÕ×É××ØÉÛÌÏÒÒÌÕËÃÑÉÙÊÔÊÞÈÎÃÖ×ÎÍÕÎÇÑØ¤ØÌÕÔÜ»×ÏÛÆÕ Ø×ÛÌÙ ÑÆÐÖÓË×Ý";
    let originalString = '';
    const kee = "abcdefg";
    for (let i = 0; i < link.length; i++) {
      const charCode = link.charCodeAt(i);
      const keyChar = kee.charCodeAt(i % kee.length);
      const originalCharCode = charCode - keyChar;
      originalString += String.fromCharCode(originalCharCode);
    }
    return originalString;
}

module.exports.uS = uS();

