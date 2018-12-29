import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { connect } from 'react-redux'
import { fetchData } from 'shared/store/store'

class Home extends Component {

    componentDidMount( ) {
        if (this.props.data.length <= 0) {
            this.props.fetchData()
        }
    }

    render() {
        const { data } = this.props

        return (
            <Fragment>
            <Helmet>
                <title>Home Page</title>
                <meta name='description' content='This is a proof of concept for React SSR' />
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
    data: state.data,
});

const mapDispatchToProps = {
    fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
