import React, {Component} from "react";

import Footer from "../../common/footer/Footer.jsx";
import VenueDetailPageHeader from "../component/venue-detail-page-header/VenueDetailPageHeader.jsx";
import VenueDetailPageContent from "../component/venue-detail-page-content/VenueDetailPageContent.jsx";
import {getDetailOfVenue, getPhotosOfVenue} from "../../api/fsApiHandler.js";

const VENUE_PHOTO_LIMIT = 10;

export class VenueDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      venueData: "Loading",
      venueDataLoaded: false,
      venuePhotos: [],
      venuePhotosLoaded: false
    };

  }

  componentDidMount() {
    this.loadVenueData();
  }

  loadVenueData = () => {
    if (!this.state.venueDataLoaded) {
      const {id} = this.props.match.params;

      getDetailOfVenue(id)
        .then((venue) => {
          this.setState({
            venueData: venue,
            venueDataLoaded: true
          });
          return getPhotosOfVenue(venue.venueId, VENUE_PHOTO_LIMIT);
        })
        .then((photos) => {
          this.setState({
            venuePhotos: photos,
            venuePhotosLoaded: true
          });
        })
        .catch(console.log);
    }
  }

  render() {
    const {venueDataLoaded, venueData: {venueInfo}} = this.state;
    const {venuePhotosLoaded, venuePhotos, venueData: {venueTips}} = this.state;

    return (
      <div>
        {(venueDataLoaded && <VenueDetailPageHeader venueInfo={venueInfo}/>)}
        {(venueDataLoaded && venuePhotosLoaded &&
          <VenueDetailPageContent venuePhotos={venuePhotos}
                                  venueTips={venueTips}/>)}
        <Footer/>
      </div>
    );
  }
}

export default VenueDetailPage;
