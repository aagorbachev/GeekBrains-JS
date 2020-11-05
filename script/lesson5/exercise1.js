// 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
// *(дополнительно)Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.


let wrapper = document.createElement('div');
wrapper.classList.add('wrapper')
document.body.append(wrapper)

let chessZone = document.createElement('div')
chessZone.classList.add('chess-zone')
let squareList = createColouredSquaresArray()
chessZone.append(...squareList)

wrapper.append(createLettersRow(), createNumbersColumn(), chessZone, createNumbersColumn(), createLettersRow())

function createColouredSquaresArray() {
    let squares = []
    for (i = 1; i <= 64; i++) {
        let square = document.createElement('div')
        square.classList.add('square')
        if (
            i <= 8 ||
            i > 16 && i <= 24 ||
            i > 32 && i <= 40 ||
            i > 48 && i <= 56
        ) {
            switch ((i % 2) === 0) {
                case true:
                    square.classList.add('black_bg');
                    break;
                case false:
                    square.classList.add('white_bg');
                    break;
            }
            squares.push(square)
        } else {
            switch ((i % 2) === 0) {
                case true:
                    square.classList.add('white_bg');
                    break;
                case false:
                    square.classList.add('black_bg');
                    break;
            }
            squares.push(square)
        }
    }
    return squares
}

function createLettersRow() {
    let lettersContainer = document.createElement('div');
    lettersContainer.classList.add('letters-container')

    let lettersTemplate = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    lettersTemplate.forEach(letterText => {
        let letter = document.createElement('div');
        letter.classList.add('letter');
        letter.innerText = letterText;
        lettersContainer.append(letter);
    })
    return lettersContainer
}

function createNumbersColumn() {
    let numbersContainer = document.createElement('div');
    numbersContainer.classList.add('numbers-container')

    let numbersTemplate = [1, 2, 3, 4, 5, 6, 7, 8];

    numbersTemplate.forEach(numberValue => {
        let number = document.createElement('div');
        number.classList.add('number');
        number.innerText = numberValue;
        numbersContainer.append(number)
    })
    return numbersContainer
}