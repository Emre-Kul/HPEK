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
    const {match} = this.props;

    this.props.dispatch((dispatch) => {
      dispatch(fetchVenueDetailStarted());
      getDetailOfVenue(match.params.id)
        .then((venue) => {
          dispatch(fetchVenueDetailFulfilled({
            venueDetailData: venue
          }));
          dispatch(fetchVenuePhotosStarted());
          return getPhotosOfVenue(venue.id, VENUE_PHOTO_LIMIT);
        })
        .then((photos) => {
          dispatch(fetchVenuePhotosFulfilled({
            venueDetailPhotos: photos
          }));
        })
        .catch((err) => {
          console.log(err.message);
          dispatch(fetchVenuePhotosRejected({
            venueDetailPhotosError: err.message
          }));
        });
    });

  }

  render() {
    console.log(this.props);
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
