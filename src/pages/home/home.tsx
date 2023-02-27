import React, { useReducer, useState } from "react";
import { useHistory } from "react-router-dom";
import CreateGame from "../../components/create-game";
import GameList from "../../components/games-list";
import { isUserLoggedIn } from "../../helpers/consts";
import { initialGameState } from "../../reducers/game/data";
import { gameReducer } from "../../reducers/game/game";
import Button from "../../shared/ui/button/button";
import "./home.css"

const Home = () => {
    const [state, dispatch] = useReducer(gameReducer, initialGameState)
    const history = useHistory()
    const [showCreate, setShowCreate] = useState<boolean>(false)
    const handleCreate = () => {
        setShowCreate(true)
    }
    const handleLogout = () => {
        localStorage.removeItem(isUserLoggedIn)
        history.replace("/login")
    }
    return (

        <>
       
            {showCreate ? <CreateGame setShowCreate={setShowCreate} dispatch={dispatch} /> : ""} 
            <div>
                <Button title="Create Game" onClick={handleCreate} />
            </div>
            <div className="logout" onClick={handleLogout}>
                LOGOUT
            </div> 
            <GameList dispatch={dispatch} games={state.games} />
        </>
    )
}

export default Home;