import React, { PureComponent , Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Helmet from 'react-helmet'
import { fetchData } from 'shared/state/actions/circuits'
import withLoading from 'shared/hoc/withLoading'

class Home extends PureComponent {
    componentDidMount( ) {
        (this.props.data.length <= 0) ? this.props.fetchData() : false
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

Home.displayName = 'Home'

Home.propTypes = {
   fetchData: PropTypes.func.isRequired,
   data: PropTypes.array.isRequired,
   isLoading: PropTypes.bool.isRequired,
   hasError: PropTypes.bool.isRequired
}

Home.serverFetch = fetchData

const mapStateToProps = (state) => ({
   data: state.circuits.data,
   isLoading: state.circuits.isLoading,
   hasError: state.circuits.hasError
})

const mapDispatchToProps = {
    fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(withLoading(Home))
