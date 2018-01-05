import { Actions } from '../actions/index';

export interface MoralrightsState {
    abandonExerciseRights: boolean;
}

const init = (): MoralrightsState => ({
    abandonExerciseRights: false
});

export const moralrightsStateReducer = (state: MoralrightsState = init(), action: Actions): MoralrightsState => {
    switch (action.type) {
        case 'SET_MORALRIGHTS_ABANDON_EXERCISE_RIGHTS':
            return Object.assign(
                {},
                state,
                {
                    abandonExerciseRights: action.payload.value
                });
        default:
            return state;
    }
};
