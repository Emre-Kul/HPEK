import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import PriceTierBar from '../../../common/price-tier-bar/PriceTierBar.jsx'

import imgPeopleIcon from '../../../../asset/img/people-icon.svg'
import imgTriangle from '../../../../asset/img/triangle-icon.svg'

import './search-page-venue-card.scss'

export class SearchPageVenueCard extends Component {

  static propTypes = {
    venueData: PropTypes.object
  }

  render () {
    let venueData = this.props.venueData
    let detailLink = `/detail/${this.props.venueData.venueId}`
    let venueDivImageStyle = {
      'backgroundImage': `url("${venueData.venuePhoto}")`
    }
    return (
      <div className="search-page-venue-card"
           style={venueDivImageStyle}>
        <div className="search-page-venue-card-content">
          <div className="search-page-venue-card-name-container">
            <Link className="search-page-venue-card-link"
                  to={detailLink}>
              <span>
                {venueData.venueName}
              </span>
            </Link>
          </div>
          <div className="search-page-venue-card-herenow-container">
            <span className="search-page-venue-card-herenow">
              <img src={imgPeopleIcon}/>
              <span className="search-page-venue-card-text">
                {venueData.venueHereNow}
              </span>
            </span>
          </div>

          <div className="search-page-venue-card-tier-container">
            <PriceTierBar venueId={venueData.venueId}
                          priceTier={venueData.venuePriceTier}/>
          </div>

          <div className="search-page-venue-card-raiting-container"
               style={{
                 'backgroundImage': `url('${imgTriangle}')`
               }}>
            <span className="search-page-venue-card-raiting">
              {venueData.venueRating}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchPageVenueCard