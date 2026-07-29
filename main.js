const messages =[
    "今日も素敵な一日になりますように",
    "笑顔で過ごしましょう",
    "新しいことに挑戦してみましょう",
    "今日の運勢大吉です",
    "嬉しいことが起こるかも",
];

function message() {
    const number = Math.floor(Math.random() * 5);
    document.write(messages[number]);
}