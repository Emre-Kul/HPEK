import React, {Component} from "react";
import {connect} from "react-redux";

import Footer from "../../common/footer/Footer.jsx";
import VenueDetailPageHeader from "../component/venue-detail-page-header/VenueDetailPageHeader.jsx";
import VenueDetailPageContent from "../component/venue-detail-page-content/VenueDetailPageContent.jsx";
import {getDetailOfVenue, getPhotosOfVenue} from "../../api/fsApiHandler.js";
import {fetchVenuePhotosFulfilled, fetchVenueDetailFulfilled} from "../../reducers/venueDetailActions.js";
import {
  fetchVenueDetailStarted, fetchVenuePhotosRejected,
  fetchVenuePhotosStarted
} from "../../reducers/venueDetailActions";

const VENUE_PHOTO_LIMIT = 10;

class VenueDetailPage extends Component {

  componentDidMount() {
    this.loadVenueData();
  }

  loadVenueData = () => {
    const {match, dispatch} = this.props;

    dispatch((dispatcher) => {
      dispatcher(fetchVenueDetailStarted());
      getDetailOfVenue(match.params.id)
        .then((venue) => {
          dispatcher(fetchVenueDetailFulfilled({
            venueDetailData: venue
          }));
          dispatcher(fetchVenuePhotosStarted());
          return getPhotosOfVenue(venue.id, VENUE_PHOTO_LIMIT);
        })
        .then((photos) => {
          dispatcher(fetchVenuePhotosFulfilled({
            venueDetailPhotos: photos
          }));
        })
        .catch((err) => {
          console.log(err.message);
          dispatcher(fetchVenuePhotosRejected(err.message));
        });
    });

  }

  render() {
    const {venueDetailDataLoaded, venueDetailData} = this.props.venueDetailReducer.venueDetail;
    const {venueDetailPhotosLoaded, venueDetailPhotosData} = this.props.venueDetailReducer.venueDetailPhotos;

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
