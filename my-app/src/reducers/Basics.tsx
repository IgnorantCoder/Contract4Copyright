import { Actions } from '../actions';

export interface BasicsState {
    creator: string;
    client: string;
    material: string;
    price: number;
    delivery: {
        way: string;
        date?: Date;
    };
    payment: {
        date?: Date;
    };
}

const init = (): BasicsState => ({
    creator: '',
    client: '',
    material: '',
    price: -1,
    delivery: {
        way: ''
    },
    payment: {
    }
});

export const basicStateReducer = (state: BasicsState = init(), action: Actions): BasicsState => {
    switch (action.type) {
        case 'CHANGE_CLIENT_NAME':
            return Object.assign({}, state, { client: action.payload.changedName });
        case 'CHANGE_CREATOR_NAME':
            return Object.assign({}, state, { creator: action.payload.changedName });
        case 'CHANGE_MATERIAL_DESCRIPTION':
            return Object.assign({}, state, { material: action.payload.changedText });
        case 'CHANGE_PRICE':
            return Object.assign({}, state, { price: action.payload.changedPrice });
        case 'CHANGE_DELIVERY_WAY':
            return Object.assign({}, state, { delivery: { ...state.delivery, way : action.payload.changedWay }});
        case 'CHANGE_DELIVERY_DATE':
            return Object.assign(
                {},
                state,
                {
                    delivery: {
                        ...state.delivery,
                        date : action.payload.changed}});
        case 'CHANGE_PAYMENT_DATE':
            return Object.assign(
                {},
                state,
                {
                    payment: {
                        date: action.payload.changed
                    }});
        default:
            return state;
    }
};
