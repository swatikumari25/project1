import { CREATE_BOOK_SUCCESS, FETCH_BOOK_SUCCESS, FETCH_BOOK_ERROR } from '../Actions/Type';


let intialState = {isFetch:false, datas:[],error:false}

export default function(state = intialState, action) {
  switch (action.type) {
    case CREATE_BOOK_SUCCESS:
        return {isFetch:false, datas:action.payload,error:false}
    case FETCH_BOOK_SUCCESS:
        return {isFetch:true, datas:[],error:false}
    case FETCH_BOOK_ERROR:
        return {isFetch:false, datas:[{"Fname":"swati","Lnmae":"kumari","EmailId":"kumari@gamil.com","phoneno":1234567891},{"Fname":"sweta","Lnmae":"kumari","EmailId":"sweta@gmail.com","phoneno":1234567892},{"Fname":"rani","Lnmae":"kumari","Emailid":"rani@gmail.com","phoneno":1234567893}],error:true}
    default:
     return state

  }

}