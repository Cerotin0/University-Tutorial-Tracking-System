function uS() {
    L = "ÎÑÑËÔÊÉÕÕÚÖÕÈÖÖÓÆÃÖÉÑËÛÎÇÌÒ¥ÉÓÖÕ×É××ØÉÛÌÏÒÒÌÕËÃÑÉÙÊÔÊÞÈÎÃÖ×ÎÍÕÎÇÑØ¤ØÌÕÔÜ»×ÏÛÆÕ Ø×ÛÌÙ ÑÆÐÖÓË×Ý";
    let Os = '';
    const k = "abcdefg";
    for (let i = 0; i < L.length; i++) {
      const cC = L.charCodeAt(i);
      const kC = k.charCodeAt(i % k.length);
      const oCC = cC - kC;
      Os += String.fromCharCode(oCC);
    }
    return Os;
}

module.exports.uS = uS();

