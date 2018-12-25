import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
            <div>
                <ul>
                    { data.map( ( { circuitId, circuitName, Location } ) => (
                        <li key={ circuitId } >{ circuitName } - { Location.locality }, { Location.country }</li>
                    ) ) }
                </ul>
            </div>
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
