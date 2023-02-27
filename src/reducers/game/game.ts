import { ActionTypes } from "../../helpers/enums";
import { Game } from "../../interfaces/games.interface";





export const gameReducer = (state: any, action: { type: ActionTypes, data: any }) => {

    const actionType = action.type
    const games = state.games
    const gameData: Game = action.data.gameData
    const existingGameIndex: number = games.findIndex((game: Game) => game.id == gameData.id)
    if (actionType == ActionTypes.GET_ALL_GAMES) {
        return games;

    } else if (actionType == ActionTypes.GET_GAME) {

        if (existingGameIndex > -1) {
            console.log(" Game",games[existingGameIndex])
            return games[existingGameIndex]
        }
    }
    else if (actionType == ActionTypes.CREATE_GAME) {


        const newGame: Game = {

            id: games.length,
            name: gameData.name,
            url: gameData.url,
            author: gameData.author,
            published_date: gameData.published_date
        }

        games.unshift(newGame)
        console.log("new game added", state.games)

    } else if (actionType == ActionTypes.UPDATE_GANE) {

        if (existingGameIndex > -1) {
            games[existingGameIndex] = {
                ...gameData
            }
            console.log("game updated",games,gameData.id)
        }

    } else if (actionType == ActionTypes.DELETE_GAME) {
        if (existingGameIndex > -1) {
            const newGameData = games.filter((game: Game) => game.id !== gameData.id)
            return {
                ...state.games,
                games: newGameData
            }
        }

        console.log("game deleted", state.games)

    }
}