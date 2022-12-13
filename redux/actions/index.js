import { LIKE, DISLIKE, CLEAR } from '../actionTypes/index';

export const addItem = value => ({
    type: LIKE,
    payload: {
        app: value
    }
})

export const removeItem = value => ({
    type: DISLIKE,
    payload: {
        rem: value
    }
})

export const clearItems = value => ({
    type: CLEAR,
    payload: {
        remAll: value
    }
})