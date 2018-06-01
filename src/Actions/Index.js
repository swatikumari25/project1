import {CREATE_BOOK_SUCCESS, FETCH_BOOK_SUCCESS, FETCH_BOOK_ERROR} from './Type';
import axios from 'axios';

export function fetch() {
    return dispatch => {
        axios.get('http://demo5152489.mockable.io/swati_get')
        .then(response => dispatch({type:CREATE_BOOK_SUCCESS, payload:response.data}),
        
        err =>dispatch({type:FETCH_BOOK_ERROR, payload:err})
    
    )
    }
}