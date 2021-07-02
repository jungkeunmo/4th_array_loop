const readline = require("readline");
// import readline  from "readline";

console.log("출력할 문자열을 입력해주세요.");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (text) => {
    console.log(`사용자가 입력한 값은 ${text} 입니다`);

    rl.close();
});

rl.on("close", () => {
    process.exit();
});