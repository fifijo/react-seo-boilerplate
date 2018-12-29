import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import { fetchData } from 'shared/state/actions/circuits'

class Home extends Component {

    componentDidMount( ) {
        (this.props.data.length <= 0) ? this.props.fetchData() : ''
    }

    render() {
        const { data } = this.props

        return (
            <Fragment>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
                <ul>
                    { data.map( ( { circuitId, circuitName, Location } ) => (
                        <li key={ circuitId } >{ circuitName } - { Location.locality }, { Location.country }</li>
                    ) ) }
                </ul>
            </Fragment>
        );
    }
}

Home.propTypes = {
   fetchData: PropTypes.func,
   data: PropTypes.array
};

Home.serverFetch = fetchData

const mapStateToProps = (state) => ({
   data: state.circuits.data
});

const mapDispatchToProps = {
    fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
