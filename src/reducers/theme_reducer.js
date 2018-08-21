import types from '../actions/types';

const DEFAULT_STATE = {
    themeName: '',
    theme: {}
};


// action
// {
//     type: types.SET_THEME,
//     themeName:themeName, 
//     theme: theme
// }

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.SET_THEME:
            return {...state, themeName: action.themeName, theme: action.theme};
            default: 
                return state;
    }
}