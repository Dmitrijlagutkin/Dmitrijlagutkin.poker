let dicesList = document.querySelectorAll('.dice_item')
// let dicePoint = document.querySelectorAll('.dice_point')
const btnDice = document.querySelector('.throw_dice')
let dice = document.querySelector(".dice")
let playerOne = document.querySelector(".player_one")
let playerTwo = document.querySelector(".player_two")
//--------Default value for playerTwo----------
playerTwo.classList.add("playerOff")

let pointDiceArr = []
let counterDdropDices = 0

function getInnerHtmlArr(domElement, targetArr) {
	for (let element of domElement) {
		targetArr.push(element.innerHTML)
	}
}

function dropDices(domElement, targetArr) {
	btnDice.addEventListener("click", event => {
		counterDdropDices++
		let defaultNum = null
		for (let i = 0; i < domElement.length; i++) {
			defaultNum = Math.trunc((Math.random() * 6))
			if (!domElement[i].classList.contains("dice_active")) {
				domElement[i].innerHTML = targetArr[defaultNum]
			}
		}
	})
}

function chooseDices() {
	dice.addEventListener("click", event => {
		event.target.classList.add("dice_active")
		for (let i = 0; i < event.target.children.length; i++) {
			event.target.children[i].classList.add("dice_point_active")
		}
	})
}

// ----------------смена игрока-------------------

function chengePlayer(counter) {
	if (counter % 3 === 0) {
		playerOne.classList.add("Off")
		playerTwo.classList.remove("Off")
	} else {
		playerTwo.classList.add("Off")
		playerOne.classList.remove("Off")
	}
}

function taskManager() {
	chengePlayer(counterDdropDices)
	getInnerHtmlArr(dicesList, pointDiceArr)
	dropDices(dicesList, pointDiceArr)
	chooseDices()
}

taskManager()