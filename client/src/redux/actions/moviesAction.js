import qs from 'qs';
import {
    PENDING_GET_MOVIES, GET_MOVIES, ERROR_GET_MOVIES,
    PENDING_ADD_MOVIES, ADD_MOVIES, ERROR_ADD_MOVIES,
    PENDING_DELETE_MOVIES, DELETE_MOVIES, ERROR_DELETE_MOVIES,
    PENDING_UPDATE_MOVIES, UPDATE_MOVIES, ERROR_UPDATE_MOVIES,
    PENDING_GET_MOVIE_BY_ID,GET_MOVIE_BY_ID,ERROR_GET_MOVIE_BY_ID
} from "./types";
import axios from "axios";
import * as Api from "./../../api"

import { handleHTTPError, addAlert, deleteAlert, updateAlert } from "./../../utils"


export function getMovies(data) {

    return async (dispatch) => {

        dispatch({
            type: PENDING_GET_MOVIES,
        });

        axios
            .get(`${Api.API_GET_MOVIES_LIST}`, {
                headers: Api.CONTENT_TYPE_DEFAULT,
            })
            .then((response) => {

                dispatch({
                    type: GET_MOVIES,
                    payload: response,
                });
            }).catch(err => {
                dispatch({
                    type: ERROR_GET_MOVIES,
                    error: handleHTTPError(err),
                });
            });
    }

}

export function createMovie(data,history) {
    return async (dispatch) => {
        dispatch({
            type: PENDING_ADD_MOVIES,
        });

        await axios
            .post(Api.API_GET_MOVIES_LIST, qs.stringify(data), {
                headers: Api.CONTENT_TYPE_DEFAULT,
            })
            .then((response) => {
                dispatch({
                    type: ADD_MOVIES,
                    payload: response,
                });
                if (response.status)
                    addAlert(response)
                    history.push('/movies/view');
            }).catch(err => {

                dispatch({
                    type: ERROR_ADD_MOVIES,
                    error: handleHTTPError(err),
                });
            });

    };

}

export function deleteMovie(Id) {
    return async (dispatch) => {
        dispatch({
            type: PENDING_DELETE_MOVIES,
        });

        await axios
            .delete(`${Api.API_GET_MOVIES_LIST}${Id}`, {
                headers: Api.CONTENT_TYPE_DEFAULT,
            })
            .then((response) => {
                dispatch({
                    type: DELETE_MOVIES,
                    payload: response,
                });
                if (response.status)
                    deleteAlert(response)

            }).catch(err => {

                dispatch({
                    type: ERROR_DELETE_MOVIES,
                    error: handleHTTPError(err),
                });
            });

    };

}

export function updateMovie(Id, data,history) {
    return async (dispatch) => {
        dispatch({
            type: PENDING_UPDATE_MOVIES,
        });

        await axios
            .put(`${Api.API_GET_MOVIES_LIST}${Id}`, qs.stringify(data), {
                headers: Api.CONTENT_TYPE_DEFAULT,
            })
            .then((response) => {
                dispatch({
                    type: UPDATE_MOVIES,
                    payload: response,
                });
                if (response.status)
                    updateAlert(response)
                    history.push('/movies/view');
            }).catch(err => {

                dispatch({
                    type: ERROR_UPDATE_MOVIES,
                    error: handleHTTPError(err),
                });
            });

    };

}

export function getMovieById(Id) {

    return async (dispatch) => {

        dispatch({
            type: PENDING_GET_MOVIE_BY_ID,
        });

        axios
            .get(`${Api.API_GET_MOVIES_LIST}${Id}`, {
                headers: Api.CONTENT_TYPE_DEFAULT,
            })
            .then((response) => {

                dispatch({
                    type: GET_MOVIE_BY_ID,
                    payload: response,
                });
            }).catch(err => {
                dispatch({
                    type: ERROR_GET_MOVIE_BY_ID,
                    error: handleHTTPError(err),
                });
            });
    }

}
