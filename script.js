const table = [
  ["a", "[ä]", "ア", "阿", "あ", "安", "⠁", "朝日のア",],
  ["i", "[i]", "イ", "伊", "い", "以", "⠃", "いろはのイ",],
  ["u", "[ɯ̹]", "ウ", "宇", "う", "宇", "⠉", "上野のウ",],
  ["e", "[e̞]", "𛀀", "衣", "え", "衣", "⠋", "英語の𛀀",],
  ["o", "[o̞]", "オ", "於", "お", "於", "⠊", "大阪のオ",],
  ["ka", "[kä]", "カ", "加", "か", "加", "⠡", "爲替のカ"],
  ["ki", "[kʲi]", "キ", "幾", "き", "幾", "⠣", "切手のキ",],
  ["ku", "[kɯ̹]", "ク", "久", "く", "久", "⠩", "クラブのク",],
  ["ke", "[ke̞]", "ケ", "介", "け", "計", "⠫", "景色のケ",],
  ["ko", "[ko̞]", "コ", "己", "こ", "己", "⠪", "子供のコ",],
  ["sa", "[sä]", "サ", "散", "さ", "左", "⠱", "櫻のサ",],
  ["si", "[ɕi]", "シ", "之", "し", "之", "⠳", "新聞のシ",],
  ["su", "[sɯ̹]", "ス", "須", "す", "寸", "⠹", "雀のス",],
  ["se", "[se̞]", "セ", "世", "せ", "世", "⠻", "世界のセ",],
  ["so", "[so̞]", "ソ", "曽 (曾)", "そ", "曾", "⠺", "算盤のソ",],
  ["ta", "[tä]", "タ", "多", "た", "太", "⠕", "煙草のタ",],
  ["ti", "[t͡ɕi]", "チ", "千", "ち", "知", "⠗", "千鳥のチ",],
  ["tu", "[t͡sɯ̹]", "ツ", "州", "つ", "州", "⠝", "鶴亀のツ",],
  ["te", "[te̞]", "テ", "天", "て", "天", "⠟", "手紙のテ",],
  ["to", "[to̞]", "ト", "止", "と", "止", "⠞", "東京のト",],
  ["na", "[nä]", "ナ", "奈", "な", "奈", "⠅", "名古屋のナ",],
  ["ni", "[nʲi]", "ニ", "二", "に", "仁", "⠇", "日本のニ",],
  ["nu", "[nɯ̹]", "ヌ", "奴", "ぬ", "奴", "⠍", "沼津のヌ",],
  ["ne", "[ne̞]", "ネ", "祢 (禰)", "ね", "祢 (禰)", "⠏", "鼠のネ",],
  ["no", "[no̞]", "ノ", "乃", "の", "乃", "⠎", "野原のノ",],
  ["pa", "[hä]", "ハ", "八", "は", "波", "⠥", "葉書のハ",],
  ["pi", "[çi]", "ヒ", "比", "ひ", "比", "⠧", "飛行機のヒ",],
  ["pu", "[ɸɯ̹]", "フ", "不", "ふ", "不", "⠭", "富士山のフ",],
  ["pe", "[he̞]", "ヘ", "部", "へ", "部", "⠯", "平和のヘ",],
  ["po", "[ho̞]", "ホ", "保", "ほ", "保", "⠮", "保險のホ",],
  ["ma", "[mä]", "マ", "万 (萬)", "ま", "末", "⠵", "マッチのマ",],
  ["mi", "[mʲi]", "ミ", "三", "み", "美", "⠷", "三笠のミ",],
  ["mu", "[mɯ̹]", "ム", "牟", "む", "武", "⠽", "無線のム",],
  ["me", "[me̞]", "メ", "女", "め", "女", "⠿", "明治のメ",],
  ["mo", "[mo̞]", "モ", "毛", "も", "毛", "⠾", "紅葉のモ",],
  ["ja", "[jä]", "ヤ", "也", "や", "也", "⠌", "大和のヤ",],
  ["ji", "[i]=i", "\u{1b120}", "以", "\u{1b006}", "以", "", "",],
  ["ju", "[jɯ̹]", "ユ", "弓", "ゆ", "由", "⠬", "弓矢のユ",],
  ["je", "[e̞]=e", "エ", "江", "𛀁", "江", "", "",],
  ["jo", "[jo̞]", "ヨ", "與", "よ", "与 (與)", "⠜", "吉野のヨ",],
  ["la", "[ɺä]", "ラ", "良", "ら", "良", "⠑", "ラヂオのラ",],
  ["li", "[ɺʲi]", "リ", "利", "り", "利", "⠓", "林檎のリ",],
  ["lu", "[ɺɯ̹]", "ル", "流", "る", "留", "⠙", "留守居のル",],
  ["le", "[ɺe̞]", "レ", "礼 (禮)", "れ", "礼 (禮)", "⠛", "蓮華のレ",],
  ["lo", "[ɺo̞]", "ロ", "呂", "ろ", "呂", "⠚", "ローマのロ",],
  ["va", "[β̞ä]", "ワ", "和", "わ", "和", "⠄", "蕨のワ",],
  ["vi", "[i]=i", "ヰ", "井", "ゐ", "爲", "⠆", "井戸のヰ",],
  ["vu", "[ɯ̹]=u", "\u{1b122}", "汙", "\u{1b11f}", "于", "", "",],
  ["ve", "[e̞]=e", "ヱ", "惠", "ゑ", "惠", "⠖", "鉤のあるヱ",],
  ["vo", "[o̞]=o", "ヲ", "乎", "を", "遠", "⠔", "尾張のヲ",],
  ["n", "[ɴ]", "ン", "?", "ん", "无", "⠴", "お終ひのン",],
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

    const squares = Array(51).fill("□");
    squares[index] = "■";
    //document.getElementById("bar").innerHTML = squares.join("");
    document.getElementsByTagName("progress")[0].setAttribute("value", index / table.length);
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

  document.addEventListener("click", ({ pageX }) => {
    if (pageX < document.body.clientWidth / 2)
      left();
    else
      right();
    f(index)
  });
});