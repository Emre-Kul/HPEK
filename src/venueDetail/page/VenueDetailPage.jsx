import React, {Component} from "react";
import {connect} from "react-redux";

import Footer from "../../common/footer/Footer.jsx";
import VenueDetailPageHeader from "../component/venue-detail-page-header/VenueDetailPageHeader.jsx";
import VenueDetailPageContent from "../component/venue-detail-page-content/VenueDetailPageContent.jsx";
import {getDetailOfVenue, getPhotosOfVenue} from "../../api/fsApiHandler.js";
import {fetchVenuePhotosFulfilled, fetchVenueDetailFulfilled} from "../../reducers/venueDetailActions.js";

const VENUE_PHOTO_LIMIT = 10;

class VenueDetailPage extends Component {

  componentDidMount() {
    this.loadVenueData();
  }

  loadVenueData = () => {
    const {match} = this.props;

    getDetailOfVenue(match.params.id)
        .then((venue) => {

          this.props.dispatch(fetchVenueDetailFulfilled({
            venueDetailData: venue,
            venueDetailDataLoaded: true
          }));

          return getPhotosOfVenue(venue.id, VENUE_PHOTO_LIMIT);
        })
        .then((photos) => {
          this.props.dispatch(fetchVenuePhotosFulfilled({
            venueDetailPhotos: photos,
            venueDetailPhotosLoaded: true
          }));
        })
        .catch(console.log);

  }

  render() {

    const {venueDetailDataLoaded, venueDetailData} = this.props.venueDetailReducer.venueDetail;
    const { venueDetailPhotosLoaded, venueDetailPhotosData} = this.props.venueDetailReducer.venueDetailPhotos;
    console.log(venueDetailPhotosData);
    return (
      <div>
        {(venueDetailDataLoaded && <VenueDetailPageHeader venueInfo={venueDetailData}/>)}
        {(venueDetailDataLoaded && venueDetailPhotosLoaded &&
          <VenueDetailPageContent venuePhotos={venueDetailPhotosData}
                                  venueTips={venueDetailData.tips.groups[0].items}/>)}
        <Footer/>
      </div>
    );
  }
}

export default connect((rootStoreState) => {
  return {
    venueDetailReducer: rootStoreState.venueDetailReducer
  };
})(VenueDetailPage);
