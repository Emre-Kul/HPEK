import React, { Component } from 'react'
import PropTypes from 'prop-types'

import DetailImageCard from '../detail-image-card/DetailImageCard.jsx'
import DetailTipMenu from '../detail-tip-menu/DetailTipMenu.jsx'

import './detail-content.scss'

export class DetailContent extends Component {
  static propTypes = {
    venuePhotos: PropTypes.array,
    venueTips: PropTypes.array
  }

  render () {
    return (
      <div className="detail-content">
        <div className="detail-content-image-container">
          {
            this.props.venuePhotos.map((venuePhoto) => {
              return (
                <DetailImageCard key={venuePhoto.photoId}
                                 backgroundImage={venuePhoto.photoUrl}
                                 userInfo={venuePhoto.photoUser}/>
              )
            })
          }
        </div>
        <DetailTipMenu venueTips={this.props.venueTips}/>
      </div>
    )
  }
}

export default DetailContent