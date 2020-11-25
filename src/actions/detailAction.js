import axios from 'axios';
import {gameDetailsURL, gameScreensShotsURL} from '../api';

export const loadDetail = (id) => async (dispatch) => {

    dispatch({
        type: 'LOADING_DETAIL'
    });

    const detailData = await axios.get(gameDetailsURL(id));
    const screenShotData = await axios.get(gameScreensShotsURL(id));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screen: screenShotData.data
        }
    });

}