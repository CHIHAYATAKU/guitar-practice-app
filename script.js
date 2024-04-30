'use strict';
//合計問題数
let $questionTotalNum = 72;
/*--------------------------------------
コード当てクイズ
---------------------------------------*/
const questions = [
    {
        str_num: "1",
        cord: "A"
    },
    {
        str_num: "1",
        cord: "E+"
    },
    {
        str_num: "1",
        cord: "A#"
    },
    {
        str_num: "1",
        cord: "B"
    },
    {
        str_num: "1",
        cord: "C"
    },
    {
        str_num: "1",
        cord: "C#"
    },
    {
        str_num: "1",
        cord: "D"
    },
    {
        str_num: "1",
        cord: "D#"
    },
    {
        str_num: "1",
        cord: "E"
    },
    {
        str_num: "1",
        cord: "F"
    },
    {
        str_num: "1",
        cord: "F#"
    },
    {
        str_num: "1",
        cord: "G"
    },
    {
        str_num: "1",
        cord: "G#"
    },
    {
        str_num: "2",
        cord: "A"
    },
    {
        str_num: "2",
        cord: "B+"
    },
    {
        str_num: "2",
        cord: "A#"
    },
    {
        str_num: "2",
        cord: "B"
    },
    {
        str_num: "2",
        cord: "C"
    },
    {
        str_num: "2",
        cord: "C#"
    },
    {
        str_num: "2",
        cord: "D"
    },
    {
        str_num: "2",
        cord: "D#"
    },
    {
        str_num: "2",
        cord: "E"
    },
    {
        str_num: "2",
        cord: "F"
    },
    {
        str_num: "2",
        cord: "F#"
    },
    {
        str_num: "2",
        cord: "G"
    },
    {
        str_num: "2",
        cord: "G#"
    },
    {
        str_num: "3",
        cord: "A"
    },
    {
        str_num: "3",
        cord: "G+"
    },
    {
        str_num: "3",
        cord: "A#"
    },
    {
        str_num: "3",
        cord: "B"
    },
    {
        str_num: "3",
        cord: "C"
    },
    {
        str_num: "3",
        cord: "C#"
    },
    {
        str_num: "3",
        cord: "D"
    },
    {
        str_num: "3",
        cord: "D#"
    },
    {
        str_num: "3",
        cord: "E"
    },
    {
        str_num: "3",
        cord: "F"
    },
    {
        str_num: "3",
        cord: "F#"
    },
    {
        str_num: "3",
        cord: "G"
    },
    {
        str_num: "3",
        cord: "G#"
    },
    {
        str_num: "4",
        cord: "A"
    },
    {
        str_num: "4",
        cord: "D+"
    },
    {
        str_num: "4",
        cord: "A#"
    },
    {
        str_num: "4",
        cord: "B"
    },
    {
        str_num: "4",
        cord: "C"
    },
    {
        str_num: "4",
        cord: "C#"
    },
    {
        str_num: "4",
        cord: "D"
    },
    {
        str_num: "4",
        cord: "D#"
    },
    {
        str_num: "4",
        cord: "E"
    },
    {
        str_num: "4",
        cord: "F"
    },
    {
        str_num: "4",
        cord: "F#"
    },
    {
        str_num: "4",
        cord: "G"
    },
    {
        str_num: "4",
        cord: "G#"
    },
    {
        str_num: "5",
        cord: "A"
    },
    {
        str_num: "5",
        cord: "A#"
    },
    {
        str_num: "5",
        cord: "A+"
    },
    {
        str_num: "5",
        cord: "B"
    },
    {
        str_num: "5",
        cord: "C"
    },
    {
        str_num: "5",
        cord: "C#"
    },
    {
        str_num: "5",
        cord: "D"
    },
    {
        str_num: "5",
        cord: "D#"
    },
    {
        str_num: "5",
        cord: "E"
    },
    {
        str_num: "5",
        cord: "F"
    },
    {
        str_num: "5",
        cord: "F#"
    },
    {
        str_num: "5",
        cord: "G"
    },
    {
        str_num: "5",
        cord: "G#"
    },
    {
        str_num: "6",
        cord: "A"
    },
    {
        str_num: "6",
        cord: "E+"
    },
    {
        str_num: "6",
        cord: "A#"
    },
    {
        str_num: "6",
        cord: "B"
    },
    {
        str_num: "6",
        cord: "C"
    },
    {
        str_num: "6",
        cord: "C#"
    },
    {
        str_num: "6",
        cord: "D"
    },
    {
        str_num: "6",
        cord: "D#"
    },
    {
        str_num: "6",
        cord: "E"
    },
    {
        str_num: "6",
        cord: "F"
    },
    {
        str_num: "6",
        cord: "F#"
    },
    {
        str_num: "6",
        cord: "G"
    },
    {
        str_num: "6",
        cord: "G#"
    },
];

// 問題をランダムにする
function shuffleQuiz(array) {
    let randomNum = Math.floor(Math.random() * array.length);
    return array[randomNum];
}

//問題文
const setupQuiz = (questionText) => {
    document.getElementById('qnum').textContent = questionText;
}

//問題作成
const createQuestion = () => {
    let selectedQuestion = shuffleQuiz(questions);
    let selectedStrNum = selectedQuestion.str_num;
    let selectedCord = selectedQuestion.cord;
    let selector = selectedStrNum + selectedCord;
    let questionText = selectedStrNum + '弦の' + selectedCord;
    console.log(questionText);
    setupQuiz(questionText);
    return selector;
}

let selector = createQuestion();
//クリックイベント
document.querySelectorAll('td').forEach(cell => {
    cell.addEventListener('click', () => {
        // クリックされたセルのIDを取得
        let idClickedCell = cell.id;
        // クリックされたセルと正解のセルが一致するか確認
        if (idClickedCell === selector) {
            // 赤丸を表示
            document.getElementById('doubleCircle').style.display = 'block';
            // 0.5秒後に赤の二重丸を非表示にする
            setTimeout(() => {
                document.getElementById('doubleCircle').style.display = 'none';
            }, 500); // 500ミリ秒（0.5秒）
            selector = createQuestion();
        }
    });
});