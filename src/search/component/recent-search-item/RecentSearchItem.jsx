import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './recent-search-item.scss'

export class RecentSearchItem extends Component {
  static propTypes = {
    recentSearchQuery: PropTypes.string,
    recentSearchLocation: PropTypes.string
  }

  render () {
    return (
      <li className="recent-search-item">
        <Link className="recent-search-item-link"
              to={`/search/${this.props.recentSearchQuery}/${this.props.recentSearchLocation}`}>
          {`${this.props.recentSearchQuery} in ${this.props.recentSearchLocation}`}
        </Link>
      </li>
    )
  }
}

export default RecentSearchItem