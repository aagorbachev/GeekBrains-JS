// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.


function getNumberPositions(number) {

    let divider = 100;
    let PositionBox = [];
    const NumberPositions = {
        hundreds: 0,
        decades: 0,
        units: 0
    }
    if (number < 0 || isNaN(number)) {
        console.log("Вы ввели неправильное число");
        return NumberPositions;
    }
    else {
        for (number; number > 0; divider = divider / 10) {
            PositionBox.push(Math.floor(number / divider));
            number = number % divider;
        }

        switch (PositionBox.length) {
            case 1:
                PositionBox.push(0, 0);
                break
            case 2:
                PositionBox.push(0);
                break;
            case 3:
                break;
        }

        NumberPositions.hundreds = PositionBox[0];
        NumberPositions.decades = PositionBox[1];
        NumberPositions.units = PositionBox[2];

        return NumberPositions;
    }
}

number = +prompt("Введите любое число больше 0");
console.log(getNumberPositions(number));