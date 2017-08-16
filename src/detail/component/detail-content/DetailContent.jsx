import React from "react";
import DetailImageCard from "../detail-image-card/DetailImageCard.jsx";
import "./detail-content.scss";

export class DetailContent extends React.Component{
  constructor(){
    super();
  }
  render(){
    console.log(this.props.venueTips);
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
        <div className="detail-content-tips-container"/>
      </div>
    );
  }
}
export default DetailContent;