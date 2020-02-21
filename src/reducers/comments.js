import {SAVE_COMMENT, FETCH_COMMENTS} from 'actions/types'

export default function(state = [], action) {
    switch(action.type){
        case SAVE_COMMENT:
            return [...state, action.payload] //creates new array filled with things form previous array plus new comment
        case FETCH_COMMENTS:
            const comments = action.payload.data.map(comment => comment.name);
            return [...state, ...comments] //return all the existing comments and fetched comments in one array
        default:
            return state;

    }
}