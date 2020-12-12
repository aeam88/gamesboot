import axios from 'axios';
import {popularGamesURL, newGamesURL, searchGameURL} from '../api';

export const loadGames = () => async (dispatch) => {
    const popularData = await axios.get(popularGamesURL);
    const newGameData = await axios.get(newGamesURL);

    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularData.data.results,
            newGames: newGameData.data.results
        }
    });
}

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchGames = await axios.get(searchGameURL(game_name));

    dispatch({
        type: 'FETCH_SEARCHED',
        payload: {
            searched: searchGames.data.results,
        }
    });
}

export const clearSearch = () => async (dispatch) => {

    dispatch({
        type: 'CLEAR_SEARCHED',
        payload: {
            searched: [],
        }
    });
}