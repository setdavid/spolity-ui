import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const Main = (props) => {
    return (
        <div id='main'>
            <div className='container-fluid'>
            This is the Main container

            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        // navigateCreateCheckout: value => dispatch(actions.navigateCreateCheckout(value))
    };
}

const mapStateToProps = () => createStructuredSelector({
    // currentPage: selectors.makeSelectCurrentPage();
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);