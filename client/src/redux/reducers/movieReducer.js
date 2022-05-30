/* eslint-disable import/no-anonymous-default-export */
import {
    PENDING_GET_MOVIES, GET_MOVIES, ERROR_GET_MOVIES,
    PENDING_ADD_MOVIES, ADD_MOVIES, ERROR_ADD_MOVIES,
    PENDING_DELETE_MOVIES, DELETE_MOVIES, ERROR_DELETE_MOVIES,
    PENDING_UPDATE_MOVIES, UPDATE_MOVIES, ERROR_UPDATE_MOVIES,
    PENDING_GET_MOVIE_BY_ID, GET_MOVIE_BY_ID, ERROR_GET_MOVIE_BY_ID

} from "./../actions/types";


const initialState = {
    login: [],
};

export default function (state = initialState, action) {
    switch (action.type) {

        case PENDING_GET_MOVIES:
            return {
                ...state,
                pending_movie: true,
            }
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload && action.payload.data && action.payload.data.data ? action.payload.data.data : [],
                pending_movie: false,
            }
        case ERROR_GET_MOVIES:
            return {
                ...state,
                pending_movie: false,
                error_movie: action.payload,
            }

        case PENDING_ADD_MOVIES:
            return {
                ...state,
                pending_add_movie: true,
            }
        case ADD_MOVIES:
            return {
                ...state,
                add_movie: action.payload && action.payload.data && action.payload.data.data ? action.payload.data.data : [],
                pending_add_movie: false,
            }
        case ERROR_ADD_MOVIES:
            return {
                ...state,
                pending_add_movie: false,
                error_add_movie: action.payload,
            }

        case PENDING_DELETE_MOVIES:
            return {
                ...state,
                pending_delete_movie: true,
            }
        case DELETE_MOVIES:
            return {
                ...state,
                delete_movie: action.payload && action.payload.data && action.payload.data.data ? action.payload.data.data : [],
                pending_delete_movie: false,
            }
        case ERROR_DELETE_MOVIES:
            return {
                ...state,
                pending_delete_movie: false,
                error_delete_movie: action.payload,
            }

        case PENDING_UPDATE_MOVIES:
            return {
                ...state,
                pending_update_movie: true,
            }
        case UPDATE_MOVIES:
            return {
                ...state,
                update_movie: action.payload && action.payload.data && action.payload.data.data ? action.payload.data.data : [],
                pending_update_movie: false,
            }
        case ERROR_UPDATE_MOVIES:
            return {
                ...state,
                pending_update_movie: false,
                error_update_movie: action.payload,
            }

        case PENDING_GET_MOVIE_BY_ID:
            return {
                ...state,
                pending_get_movie_by_id: true,
            }
        case GET_MOVIE_BY_ID:
            return {
                ...state,
                get_movie_by_id: action.payload && action.payload.data && action.payload.data.data ? action.payload.data.data : [],
                pending_get_movie_by_id: false,
            }
        case ERROR_GET_MOVIE_BY_ID:
            return {
                ...state,
                pending_get_movie_by_id: false,
                error_get_movie_by_id: action.payload,
            }

        default:


            return state
    }
}