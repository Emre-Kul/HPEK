import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import RecentSearchItem from '../recent-search-item/RecentSearchItem.jsx'

import './recent-search-list.scss'

export class RecentSearchList extends Component {
  static propTypes = {
    recentSearchs: PropTypes.array
  }

  render () {
    return (
      <ul className="recent-search-list">
        {
          this.props.recentSearchs.map((recentSearch) => {
            return (
              <RecentSearchItem key={recentSearch.id}
                                recentSearchQuery={recentSearch.searchQuery}
                                recentSearchLocation={recentSearch.searchLocation}/>
            )
          })
        }
      </ul>
    )
  }
}

RecentSearchList = connect((rootStoreState) => {
  return {
    recentSearchs: rootStoreState.recentSearchs
  }
})(RecentSearchList)

export default RecentSearchList