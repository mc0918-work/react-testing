import commentsReducer from 'reducers/comments';
import {SAVE_COMMENT} from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'new comment'
    };
    const newState = commentsReducer([], action) //the empty array represents initial state

    expect(newState).toEqual(['new comment']);
});

it('does not throw error if handling action of unknown type', () => {
    const newState = commentsReducer([], {type: String});
    expect(newState).toEqual([])
})

