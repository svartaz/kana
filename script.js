const table = [
  ["a", "[ä]", "ア", "阿", "あ", "安", "⠁", "<ruby>朝日<rt>asapi</rt></ruby>のア",],
  ["i", "[i]", "イ", "伊", "い", "以", "⠃", "いろはのイ",],
  ["u", "[ɯ̹]", "ウ", "宇", "う", "宇", "⠉", "<ruby>上野<rt>upeno</rt></ruby>のウ",],
  ["e", "[e̞]", "𛀀", "衣", "え", "衣", "⠋", "<ruby>英語<rt>QeĩGo</rt></ruby>の𛀀",],
  ["o", "[o̞]", "オ", "於", "お", "於", "⠊", "<ruby>大阪<rt>oposaka</rt></ruby>のオ",],
  ["ka", "[kä]", "カ", "加", "か", "加", "⠡", "<ruby>爲替<rt>kapase</rt></ruby>のカ"],
  ["ki", "[kʲi]", "キ", "幾", "き", "幾", "⠣", "<ruby>切手<rt>kilte</rt></ruby>のキ",],
  ["ku", "[kɯ̹]", "ク", "久", "く", "久", "⠩", "クラブのク",],
  ["ke", "[ke̞]", "ケ", "介", "け", "計", "⠫", "<ruby>氣色<rt>KeSik</rt></ruby>のケ",],
  ["ko", "[ko̞]", "コ", "己", "こ", "己", "⠪", "<ruby>子供<rt>kodomo</rt></ruby>のコ",],
  ["sa", "[sä]", "サ", "散", "さ", "左", "⠱", "<ruby>櫻<rt>sakula</rt></ruby>のサ",],
  ["si", "[ɕi]", "シ", "之", "し", "之", "⠳", "<ruby>新聞<rt>SinMun</rt></ruby>のシ",],
  ["su", "[sɯ̹]", "ス", "須", "す", "寸", "⠹", "<ruby>雀<rt>suzume</rt></ruby>のス",],
  ["se", "[se̞]", "セ", "世", "せ", "世", "⠻", "<ruby>世界<rt>SeKai</rt></ruby>のセ",],
  ["so", "[so̞]", "ソ", "曽←曾", "そ", "曽←曾", "⠺", "<ruby>算盤<rt>soloBan</rt></ruby>のソ",],
  ["ta", "[tä]", "タ", "多", "た", "太", "⠕", "<ruby>煙草<rt>tabako</rt></ruby>のタ",],
  ["ti", "[t͡ɕi]", "チ", "千", "ち", "知", "⠗", "<ruby>千鳥<rt>tidoli</rt></ruby>のチ",],
  ["tu", "[t͡sɯ̹]", "ツ", "州", "つ", "州", "⠝", "<ruby>鶴亀<rt>tulukame</rt></ruby>のツ",],
  ["te", "[te̞]", "テ", "天", "て", "天", "⠟", "<ruby>手紙<rt>tecami</rt></ruby>のテ",],
  ["to", "[to̞]", "ト", "止", "と", "止", "⠞", "<ruby>東京<rt>ToũKjaũ</rt></ruby>のト",],
  ["na", "[nä]", "ナ", "奈", "な", "奈", "⠅", "<ruby>名古屋<rt>nacoja</rt></ruby>のナ",],
  ["ni", "[nʲi]", "ニ", "二", "に", "仁", "⠇", "<ruby>日本<rt>NitPon</rt></ruby>のニ",],
  ["nu", "[nɯ̹]", "ヌ", "奴", "ぬ", "奴", "⠍", "<ruby>沼津<rt>numadu</rt></ruby>のヌ",],
  ["ne", "[ne̞]", "ネ", "祢←禰", "ね", "祢←禰", "⠏", "<ruby>鼠<rt>nezumi</rt></ruby>のネ",],
  ["no", "[no̞]", "ノ", "乃", "の", "乃", "⠎", "<ruby>野原<rt>nopala</rt ></ruby > のノ",],
  ["pa", "[hä]", "ハ", "八", "は", "波", "⠥", "<ruby>葉書<rt>pacaki</rt></ruby>のハ",],
  ["pi", "[çi]", "ヒ", "比", "ひ", "比", "⠧", "<ruby>飛行機<rt>PiHaũKi</rt></ruby>のヒ",],
  ["pu", "[ɸɯ̹]", "フ", "不", "ふ", "不", "⠭", "<ruby>富士山<rt>puziSan</rt></ruby>のフ",],
  ["pe", "[he̞]", "ヘ", "部", "へ", "部", "⠯", "<ruby>平和<rt>BeũHva</rt></ruby>のヘ",],
  ["po", "[ho̞]", "ホ", "保", "ほ", "保", "⠮", "<ruby>保險<rt>PoHen</rt></ruby>のホ",],
  ["ma", "[mä]", "マ", "万←萬", "ま", "末", "⠵", "マッチのマ",],
  ["mi", "[mʲi]", "ミ", "三", "み", "美", "⠷", "<ruby>三笠<rt>mikasa</rt></ruby>のミ",],
  ["mu", "[mɯ̹]", "ム", "牟", "む", "武", "⠽", "<ruby>無線<rt>MuSen</rt></ruby>のム",],
  ["me", "[me̞]", "メ", "女", "め", "女", "⠿", "<ruby>明治<rt>MeĩZi</rt></ruby>のメ",],
  ["mo", "[mo̞]", "モ", "毛", "も", "毛", "⠾", "<ruby>紅葉<rt>momidi</rt></ruby>のモ",],
  ["ja", "[jä]", "ヤ", "也", "や", "也", "⠌", "<ruby>大和<rt>jamato</rt></ruby>のヤ",],
  ["ji", "[i]=i", "\u{1b120}", "以", "\u{1b006}", "以", "", "",],
  ["ju", "[jɯ̹]", "ユ", "弓", "ゆ", "由", "⠬", "<ruby>弓矢<rt>jumija</rt></ruby>のユ",],
  ["je", "[e̞]=e", "エ", "江", "𛀁", "江", "", "",],
  ["jo", "[jo̞]", "ヨ", "與", "よ", "与←與", "⠜", "<ruby>吉野<rt>josino</rt></ruby>のヨ",],
  ["la", "[ɺä]", "ラ", "良", "ら", "良", "⠑", "ラヂオのラ",],
  ["li", "[ɺʲi]", "リ", "利", "り", "利", "⠓", "<ruby>林檎<rt>LimCom</rt></ruby>のリ",],
  ["lu", "[ɺɯ̹]", "ル", "流", "る", "留", "⠙", "<ruby>留守居<rt>LuSu-vi</rt></ruby>のル",],
  ["le", "[ɺe̞]", "レ", "礼←禮", "れ", "礼←禮", "⠛", "<ruby>蓮華<rt>LenHe</rt></ruby>のレ",],
  ["lo", "[ɺo̞]", "ロ", "呂", "ろ", "呂", "⠚", "ローマのロ",],
  ["va", "[β̞ä]", "ワ", "和", "わ", "和", "⠄", "<ruby>蕨<rt>valabi</rt></ruby>のワ",],
  ["vi", "[i]=i", "ヰ", "井", "ゐ", "爲", "⠆", "<ruby>井戸<rt>vido</rt></ruby>のヰ",],
  ["vu", "[ɯ̹]=u", "\u{1b122}", "于", "\u{1b11f}", "汙", "", "",],
  ["ve", "[e̞]=e", "ヱ", "惠", "ゑ", "惠", "⠖", "<ruby>鉤<rt>kaci</rt></ruby>の<ruby>有<rt>a</rt></ruby>るヱ",],
  ["vo", "[o̞]=o", "ヲ", "乎", "を", "遠", "⠔", "<ruby>尾張<rt>vopali</rt></ruby>のヲ",],
  ["n", "[ɴ]", "ン", "?", "ん", "无", "⠴", "お<ruby>終<rt>sima</rt></ruby>ひのン",],
];

document.addEventListener("DOMContentLoaded", () => {
  const f = index => {
    const row = table[index];
    document.getElementById("roman").innerHTML = row[0];
    document.getElementById("ipa").innerHTML = row[1];
    document.getElementById("kata").innerHTML = row[2];
    document.getElementById("kata-kanzi").innerHTML = row[3];
    document.getElementById("pila").innerHTML = row[4];
    document.getElementById("pila-kanzi").innerHTML = row[5];
    document.getElementById("braille").innerHTML = row[6];
    document.getElementById("code").innerHTML = row[7];
    //document.getElementById("kata-uni").innerHTML = `U+${row[2].charCodeAt().toString(16)}`;
    //document.getElementById("pila-uni").innerHTML = `U+${row[4].charCodeAt().toString(16)}`;

    if (row[3] == row[5]) {
      document.getElementById("pila-kanzi").style.display = "none";
      document.getElementById("kata-kanzi").style.gridColumn = "2 / 4";
    } else {
      document.getElementById("pila-kanzi").style.display = "grid";
      document.getElementById("kata-kanzi").style.gridColumn = "";
    }
  }
  let index = 0;
  f(index);

  const right = () => {
    index = (index + 1) % table.length;
  }

  const left = () => {
    index = (index - 1 + table.length) % table.length;
  }

  document.addEventListener("keydown", ({ key }) => {
    switch (key) {
      case "ArrowRight":
        right();
        break;
      case "ArrowLeft":
        left();
        break;
    }
    f(index);
  })

  document.addEventListener("touchstart", (event) => {
    event.preventDefault();
    if (event.pageX < document.body.clientWidth / 2)
      left();
    else
      right();
    f(index)
  });
});
