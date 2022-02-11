import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
const Body = ({ spotify }) => {
  const [{discover_weekly}, dispatch] = useDataLayerValue()
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img
          src={
            discover_weekly?.images[0]?.url ||
            "https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519__340.jpg"
          }
          alt=""
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>
            {discover_weekly?.description || "you did not have a description "}
          </p>
        </div>

        <div className="body__songs">
          <div className="body__icons">
            <PlayCircleFilledIcon className="body__shuffle" />
            <FavoriteIcon fontSize="large" />
            <MoreHorizIcon />
          </div>

          {discover_weekly?.tracks?.items?.map(item => (
            <SongRow track={item?.track}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
