"use strict";

const BLANK_BOARD = [1,2,3,4,5,6,7,8,9];
const GAME_ROWS = 3;
const GAME_COLS = 3;
// how many rows/cols in an actual tic tac toe board?
const MAGIC = 3;

let game = [];

console.log("UT3 Sim Loaded!");
populateGame();
drawGame();

function populateGame(){
	let i = 0;
	while (i < (GAME_ROWS * GAME_COLS)){
		game.push(JSON.parse(JSON.stringify(BLANK_BOARD)));
		game[i][i] = '.';
		i++;
	}
}

function drawGame(){
	let h = 0;
	while (h < MAGIC){
		let i = 1;
		while (i <= MAGIC){
			let j = (0 + (h * MAGIC));
			let bigRow = [];
			while (j < (MAGIC + (h * MAGIC))){
				bigRow.push(makeRow(game[j], i));
				j++;
			}
			console.log(bigRow.join(' '));
			i++;
		}
		console.log('');
		h++;
	}


	function makeRow(board, row){
		let indexStart = (row - 1) * MAGIC;
		return `${board[indexStart]}${board[indexStart + 1]}${board[indexStart + 2]}`;
	}
}
