import { combineReducers } from 'redux';
import { BasicsState, basicStateReducer } from './Basics';
import { copyRightsReducer, CopyrightsState } from './Copyrights';
import { MoralrightsState, moralrightsStateReducer } from './Moralrights';
import { ControllerState, controllerStateReducer } from './Controller';

export interface RootState {
    basics: BasicsState;
    copyrights: CopyrightsState;
    moralrights: MoralrightsState;
    controller: ControllerState;
}

const rootReducer = combineReducers(
    {
        basics : basicStateReducer,
        copyrights : copyRightsReducer,
        moralrights : moralrightsStateReducer,
        controller: controllerStateReducer
    });

export default rootReducer;
