import { RootState } from '../reducers/index';
import { connect } from 'react-redux';
import Contract from '../components/Contract';

const mapStateToProps = (state: RootState) => ({
    creatorName: state.basics.creator,
    clientName: state.basics.client,
    materialDescription: state.basics.material,
    delivery : state.basics.delivery,
    copyrights: {
        transfer: state.copyrights.transfer,
        withDerivativeRights: state.copyrights.allowDerivativeWorks
    },
    moralrights: {
        abandon: state.moralrights.abandonExerciseRights
    },
    license: {...state.copyrights.license},
    payment : {
        price: state.basics.price,
        date: state.basics.payment.date
    }
});

const contractPreview = connect(
    mapStateToProps
)(Contract);

export default contractPreview;
