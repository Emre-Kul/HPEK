import React, { Component } from 'react'

import Footer from '../../common/footer/Footer.jsx'
import DetailPageHeader from '../component/detail-page-header/DetailPageHeader.jsx'
import DetailPageContent from '../component/detail-page-content/DetailPageContent.jsx'
import { getDetailOfVenue, getPhotosOfVenue } from '../../api/fsApiHandler.js'

const VENUE_PHOTO_SIZE = '480x480'
const VENUE_PHOTO_LIMIT = 10

export class DetailPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      venueData: 'Loading',
      venueDataLoaded: false,
      venuePhotos: [],
      venuePhotosLoaded: false
    }
    this.loadVenueData = this.loadVenueData.bind(this)
  }

  componentDidMount () {
    this.loadVenueData()
  }

  loadVenueData () {
    if (!this.state.venueDataLoaded) {
      let id = this.props.match.params.id
      getDetailOfVenue(id)
        .then((venue) => {
          this.setState({
            venueData: venue,
            venueDataLoaded: true
          })
          return getPhotosOfVenue(venue.venueId, VENUE_PHOTO_SIZE, VENUE_PHOTO_LIMIT)
        })
        .then((photos) => {
          this.setState({
            venuePhotos: photos,
            venuePhotosLoaded: true
          })
        })
        .catch(console.log)
    }
  }

  render () {
    return (
      <div>
        {(this.state.venueDataLoaded && <DetailPageHeader venueInfo={this.state.venueData.venueInfo}/>)}
        {(this.state.venueDataLoaded && this.state.venuePhotosLoaded &&
          <DetailPageContent venuePhotos={this.state.venuePhotos}
                             venueTips={this.state.venueData.venueTips}/>)}
        <Footer/>
      </div>
    )
  }
}

export default DetailPage