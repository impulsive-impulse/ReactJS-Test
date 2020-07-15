import * as ActionTypes from './actionTypes';

export const feedback = (state = { errMess: null, feedback: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACK:
            var currFeedback = action.payload;
            return {...state, feedback: state.feedback.concat(currFeedback) };

        default:
            return state;
    }
};