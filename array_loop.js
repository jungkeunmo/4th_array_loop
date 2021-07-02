// 배열 -> 변수 데이터를 담는건데,
// 하나의 저장공간 -> 여러개의 데이터를.

const boardList = [
    {
        no: 1,
        title: "게시글 테스트",
        author: "지민수",
        createdAt: "2021/07/01",
        hit: 33,
    },
    {
        no: 2,
        title: "눈누난나",
        author: "오동건",
        createdAt: "2021/06/20",
        hit: 203,
    },
    {
        no: 3,
        title: "기린",
        author: "김지언",
        createdAt: "2021/06/11",
        hit: 360,
    },
];

// 설계도면
boardList.forEach((board) => {
    console.log(` - ${board.no} - ${board.title} - ${board.author} - ${board.createdAt} - ${board.hit}`);
    console.log("----------------------------------------------");
});

//console.log(boardList);
// () => {} 는 콜백함수

// 5가지 활용법
// 1. 반복문
// 2. 조건문
// 3. 함수
// 4. 객체 활용
// 5. API

//1.배열 canList에 음료 정보를 저장하려고 한다.
//  음료는 콜라, 사이다, 환타, 게토레이, 마운틴듀, 포카리스웨이트, 가 있고,
//  금액은 순서대로 1000, 900, 800, 1100, 1000, 1400 이다.
//  음료의 이름은 name으로, 금액은 price로 key값을 설정히여 제이슨 데이터타입으로
//  저장한다. 단, name의 데이터 유형은 String이고, price의 데이터 유형은
//  Integer 이다.

const canList = [
    {
        name: "콜라",
        price: 1000,
    },
    {
        name: "사이다",
        price: 900,
    },
    {
        name: "환타",
        price: 800,
    },
    {
        name: "게토레이",
        price: 1100,
    },
    {
        name: "마운틴듀",
        price: 1000,
    },
    {
        name: "포카리스웨이트",
        price: 1400,
    },
];

//2.canList를 반복하여, 음료의 이름과 금액을 
//  출력형태 : 콜라-1000원
//           사이다-900원
//           ...
//           ...
// 위와 같은 형태로 출력시킨다.

canList.forEach((can) => {
    console.log(` - ${can.name} - ${can.price}`);
    console.log("-----------------------------");
});