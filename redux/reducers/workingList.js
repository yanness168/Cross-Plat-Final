import { LIKE, DISLIKE, CLEAR } from '../actionTypes/index';

const initialState = {value: []}

export default function(state = initialState, action) {
    //console.log(state);
    console.log(action.payload);
    //Method to filter out a specific element from the array
    function arrayRemove(arr, v) {
        //console.log(arr);
        //console.log(v);
        return arr.filter(function(ele){
            return ele != v
        })
    }
    switch(action.type){
        case DISLIKE: {
            const { rem } = action.payload;

            return {
                ...state,
                //Removes the passed value form the state array
                value: arrayRemove(state.value, rem)
                
            }
        }

        case LIKE: {
            const { app } = action.payload;
            return {
                ...state,
                //Adds the passed value to the aray
                value: state.value.concat(app)
            }
        }

        case CLEAR: {
            const { remAll } = action.payload;
            return {
                ...state,
                //clears the array entirely
                value: state.value = []
            }
        }
        default: {
            return state;
        }
    }   


}
