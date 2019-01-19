import React, { PureComponent , Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Helmet from 'react-helmet'
import { fetchData } from 'shared/state/actions/posts'
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
                <h2>This is the home page filled with fake data</h2>
                <ul>
                    { data.map( ( { id, title, body } ) => (
                        <li key={ id } >{ title } - { body }</li>
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
   hasError: PropTypes.bool
}

Home.serverFetch = fetchData

const mapStateToProps = (state) => ({
   data: state.posts.data,
   isLoading: state.posts.isLoading,
   hasError: state.posts.hasError
})

const mapDispatchToProps = {
    fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(withLoading(Home))
