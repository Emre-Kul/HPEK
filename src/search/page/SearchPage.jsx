import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Footer from '../../common/footer/Footer.jsx'
import SearchPageHeader from '../component/search-page-header/SearchPageHeader.jsx'
import SearchPageContent from '../component/search-page-content/SearchPageContent.jsx'
import { searchVenues } from '../../api/fsApiHandler.js'
import { actionAddToSearchList } from '../../reducers/searchActions.js'

const VENUE_PHOTO_SIZE = '480x480'
const VENUE_SEARCH_LIMIT = 10
const SEARCH_HEADER_PHOTO_SIZE = '1250x150'

export class SearchPage extends Component {

  static propTypes = {
    isHomePage: PropTypes.bool,
    match: PropTypes.object,
    dispatch: PropTypes.func
  }

  constructor (props) {
    super(props)

    this.state = {
      lastSearch: '',
      venuesData: [],
      searchHeaderPhoto: '',
      warning: {},
      animateHeaderAtSearch: false
    }

    this.makeSearch = this.makeSearch.bind(this)

  }

  componentDidMount () {
    this.makeSearch()
  }

  componentDidUpdate () {
    this.makeSearch()
  }

  makeSearch () {
    if (this.props.isHomePage && !this.state.animateHeaderAtSearch) {
      this.setState({
        animateHeaderAtSearch: true
      })
    }
    if (!this.props.isHomePage) {
      let query = this.props.match.params.query
      let location = this.props.match.params.location
      if (query + location !== this.state.lastSearch) {
        this.setState({
          venuesData: [],
          searchHeaderPhoto: '',
          warning: {},
          lastSearch: query + location
        })
        searchVenues(query, location, VENUE_PHOTO_SIZE, SEARCH_HEADER_PHOTO_SIZE, VENUE_SEARCH_LIMIT)
          .then((venuesData) => {
            this.props.dispatch(actionAddToSearchList(venuesData.searchId, query, location))
            this.setState({
              venuesData: venuesData.venues,
              searchHeaderPhoto: venuesData.searchHeaderPhoto
            })
          })
          .catch((err) => {
            this.setState({
              warning: err
            })
          })
      }
    }
  }

  render () {
    let isHomePage = this.props.isHomePage
    return (
      <div>
        <SearchPageHeader isHomePage={isHomePage}
                      animateHeaderAtSearch={this.state.animateHeaderAtSearch}
                      searchHeaderPhoto={this.state.searchHeaderPhoto}/>
        {(!this.props.isHomePage &&
          <SearchPageContent warning={this.state.warning}
                         venuesData={this.state.venuesData}/>)}
        <Footer/>
      </div>
    )
  }
}

SearchPage = connect()(SearchPage)

export default SearchPage
