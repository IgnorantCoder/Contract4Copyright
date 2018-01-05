import { RootState } from '../reducers/index';
import { connect } from 'react-redux';
import Basics from '../components/Basics';
import { Dispatch } from 'redux';
import {
    ChangeClientName,
    ChangeCreatorName,
    ChangeDeliveryDate,
    ChangeDeliveryWay,
    ChangeMaterialDescription,
    ChangePaymentDate,
    ChangePrice
} from '../actions/index';

const mapStateToProps = (state: RootState) => {
    return;
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {
    return {
        onChangeCreatorName: (changed: string) => {
            dispatch(ChangeCreatorName(changed));
        },
        onChangeClientName: (changed: string) => {
            dispatch(ChangeClientName(changed));
        },
        onChangeMaterialDescription: (changed: string) => {
            dispatch(ChangeMaterialDescription(changed));
        },
        onChangePrice: (changed: number) => {
            dispatch(ChangePrice(changed));
        },
        onChangeDeliveryDate: (changed: Date) => {
            dispatch(
                ChangeDeliveryDate(changed));
        },
        onChangeDeliveryWay: (changed: string) => {
            dispatch(ChangeDeliveryWay(changed));
        },
        onChangePaymentDate: (changed: Date) => {
            dispatch(
                ChangePaymentDate(changed));
        },
    };
};

const basicsController = connect(
    mapStateToProps,
    mapDispatchToProps
)(Basics);

export default basicsController;
