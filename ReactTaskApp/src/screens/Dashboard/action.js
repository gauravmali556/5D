
export const SET_CHINPZ = 'SET_CHINPZ'
export const INIT_CHINPZ = 'INIT_CHINPZ'

export const initChinpz = () => ({
    type: INIT_CHINPZ,
});
export const setChinpz = (data) => ({
    type: SET_CHINPZ,
    payload: data,
});
