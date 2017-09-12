import React, { Component } from 'react'
import PropTypes from 'prop-types'

import DetailPageVenueCard from '../detail-page-venue-card/DetailPageVenueCard.jsx'
import DetailPageTipMenu from '../detail-page-tip-menu/DetailPageTipMenu.jsx'

import './detail-page-content.scss'

export class DetailPageContent extends Component {
  static propTypes = {
    venuePhotos: PropTypes.array,
    venueTips: PropTypes.array
  }

  render () {
    return (
      <div className="detail-page-content">
        <div className="detail-page-content-venue-container">
          {
            this.props.venuePhotos.map((venuePhoto) => {
              return (
                <DetailPageVenueCard key={venuePhoto.photoId}
                                     backgroundImage={venuePhoto.photoUrl}
                                     userInfo={venuePhoto.photoUser}/>
              )
            })
          }
        </div>
        <DetailPageTipMenu venueTips={this.props.venueTips}/>
      </div>
    )
  }
}

export default DetailPageContent