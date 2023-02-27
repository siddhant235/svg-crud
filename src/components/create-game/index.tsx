import React, { useState } from "react";
import { ActionTypes } from "../../helpers/enums";
import { Game } from "../../interfaces/games.interface";
import Button from "../../shared/ui/button/button";
import Card from "../../shared/ui/card/card";
import Input from "../../shared/ui/input/input";
import "./game.css"
interface GameCreateProps {
    data?: Game,
    setShowCreate: any,
    dispatch: any
}

const CreateGame = (props: GameCreateProps) => {


    const { setShowCreate, dispatch, data = {
        id: "",
        name: "",
        url: "",
        author: "",
        published_date: new Date()
    } } = props
    const [gameData, setGameData] = useState<any>(data)

    const handleSubmit = () => {
        if (data.id) {
            dispatch({
                type: ActionTypes.UPDATE_GAME, data: {
                    gameData: gameData
                }
            })
        }

        else {
            dispatch({
                type: ActionTypes.CREATE_GAME, data: {
                    gameData: gameData
                }
            })
        }
        setShowCreate(false)
    }

    const handleClose=()=>{
        setShowCreate(false)
    }
    return (
        <div className="creategame_container">
            <Card>
                <div className="close_button" onClick={handleClose}>
                    close
                </div>
                <div className="creategame_card_content">
                    <div className="game_title">

                        <label>Game title : </label>
                        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setGameData({ ...gameData, name: e.target.value }) }} value={gameData.name} />
                    </div>
                    <div className="game_url">

                        <label>Game url : </label>
                        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setGameData({ ...gameData, url: e.target.value }) }} value={gameData.url} />
                    </div>

                    <div className="game_author">

                        <label>Author : </label>
                        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setGameData({ ...gameData, author: e.target.value }) }} value={gameData.author} />
                    </div>
                    <div className="creategame_button">
                        <Button title="Submit" onClick={handleSubmit} />
                    </div>

                </div>
            </Card>
        </div>
    )
}



export default CreateGame;