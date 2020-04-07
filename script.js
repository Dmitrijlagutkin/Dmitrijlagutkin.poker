let dicesList = document.querySelectorAll('.dice_item')
// let dicePoint = document.querySelectorAll('.dice_point')
const btnDice = document.querySelector('.throw_dice')
let dice = document.querySelector(".dice")
let playerOne = document.querySelector(".player_one")
let playerTwo = document.querySelector(".player_two")
//--------Default value for playerTwo----------
playerTwo.classList.add("Off")

let pointDiceArr = []
let counterDdropDices = null

function getInnerHtmlArr(domElement, targetArr) {
	for (let element of domElement) {
		targetArr.push(element.innerHTML)
	}
}


btnDice.addEventListener("click", event => {
	counterDdropDices++

	let defaultNum = null
	if (counterDdropDices < 4) {
		for (let i = 0; i < dicesList.length; i++) {
			defaultNum = Math.trunc((Math.random() * 6))
			if (!dicesList[i].classList.contains("dice_active")) {
				dicesList[i].innerHTML = pointDiceArr[defaultNum]
			}
		}
		if (counterDdropDices === 3) {
			btnDice.innerHTML = "Выберите комбинацию"
			chooseСombination()
		}
	} else if (counterDdropDices === 4) {
		btnDice.innerHTML = "Завершить ход?"
	} else {
		chengePlayer()
		counterDdropDices = 0
		btnDice.innerHTML = "Бросить кубики"
		removeClassActive(dicesList)
		for (let i = 0; i < dicesList.length; i++) {
			dicesList[i].innerHTML = pointDiceArr[i]
		}
	}
})

function removeClassActive(elem) {
	for (let i = 0; i < elem.length; i++) {
		elem[i].classList.remove("dice_active")
		for (let j = 0; j < elem[i].children.length; j++) {
			elem[i].children[j].classList.remove("dice_point_active")
		}
	}
}

function chooseDices() {
	dice.addEventListener("click", event => {
		event.target.classList.toggle("dice_active")
		for (let i = 0; i < event.target.children.length; i++) {
			event.target.children[i].classList.toggle("dice_point_active")
		}
	})

}

// ----------------смена игрока-------------------

function chengePlayer() {
	playerOne.classList.toggle("Off")
	playerTwo.classList.toggle("Off")
}

function chooseСombination() {
	console.log("Выбор комбинации")
}

function taskManager() {

	getInnerHtmlArr(dicesList, pointDiceArr)
	chooseDices()
}

taskManager()