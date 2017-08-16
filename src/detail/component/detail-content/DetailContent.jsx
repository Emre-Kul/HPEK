import React from "react";
import DetailImageCard from "../detail-image-card/DetailImageCard.jsx";
import DetailTipMenu  from "../detail-tip-menu/DetailTipMenu.jsx";
import "./detail-content.scss";

export class DetailContent extends React.Component{
  render(){
    return(
      <div className="detail-content-container">
        <div className="detail-content-image-container">
          {
            this.props.venuePhotos.map((venuePhoto) => {
              return (
                <DetailImageCard key={venuePhoto.photoId}
                                 backgroundImage={venuePhoto.photoUrl}/>
              );
            })
          }
        </div>
        <DetailTipMenu venueTips={this.props.venueTips}/>
      </div>
    );
  }
}
export default DetailContent;