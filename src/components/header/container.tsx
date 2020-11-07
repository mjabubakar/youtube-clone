import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Apps,
  ArrowBack,
  Menu,
  Notifications,
  Search,
  VideoCall,
} from "@material-ui/icons";
import logo from "../../public/logo.png";
import Icon from "./icon";
import { Avatar } from "@material-ui/core";
import { useDisplay } from "../../Homepage";
import Nav from "../nav/container";

const Header = () => {
  const [search, setSearch] = useState(true);
  const { display, setDisplay } = useDisplay()!;
  return (
    <div className="headerContainer">
      {display && <Nav />}

      {search ? (
        <div className="header">
          <div onClick={() => setDisplay(true)} className="menu">
            <Menu />
          </div>

          <div className="youtube">
            <img src={logo} alt="youtubelogo" />
          </div>

          <div className="searchbar" id="searchbar">
            <div className="inputcontainer">
              <input
                id="input"
                placeholder="Search"
                autoFocus={search ? false : true}
                onFocus={() => {
                  setSearch(false);
                }}
              />
            </div>
            <div className="faSearch">
              <FontAwesomeIcon
                icon={faSearch}
                color="#818181"
                style={{ padding: "12px" }}
              />
            </div>
          </div>
          <div className="icons">
            <div className="searchIcon" onClick={() => setSearch(false)}>
              <Search />
            </div>
            <Icon Icon={VideoCall} />
            <Icon Icon={Apps} />
            <Icon Icon={Notifications} />
            <div style={{ paddingRight: 20, cursor: "pointer" }}>
              <Avatar
                alt="Remy Sharp"
                src="https://avatars2.githubusercontent.com/u/51836422?s=460&u=86a18c04ec7072d0ee45d6e2872f2bf755bfe509&v=4"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="header">
          {search && (
              <div className="menu" onClick={() => setDisplay(true)}>
                <Menu />
              </div>
            ) && (
              <div className="youtube">
                <img src={logo} alt="youtubelogo" />
              </div>
            )}
          <div className="menu" id="menu">
            <Menu />
          </div>

          <div className="youtube" id="youtube">
            <img src={logo} alt="youtubelogo" />
          </div>
          <div className="arrow" onClick={() => setSearch(true)}>
            <ArrowBack
              style={{
                fontSize: "1.5em",
                color: "hsl(0, 0%, 38%)",
                paddingLeft: "10px",
              }}
            />
          </div>
          <div className="searchbar">
            <div className="inputcontainer">
              <input
                id="input"
                placeholder="Search"
                autoFocus={search ? false : true}
                onFocus={() => {
                  setSearch(false);
                }}
                onBlur={() => {
                  setSearch(true);
                }}
              />
            </div>
            <div className="faSearch">
              <FontAwesomeIcon
                icon={faSearch}
                color="#818181"
                style={{ padding: "12px" }}
              />
            </div>
          </div>

          <div className="icons" id="iconsx">
            <div className="searchIcon" onClick={() => setSearch(false)}>
              <Search />
            </div>
            <Icon Icon={VideoCall} />
            <Icon Icon={Apps} />
            <Icon Icon={Notifications} />
            <div style={{ paddingRight: 20, cursor: "pointer" }}>
              <Avatar
                alt="Remy Sharp"
                src="https://avatars2.githubusercontent.com/u/51836422?s=460&u=86a18c04ec7072d0ee45d6e2872f2bf755bfe509&v=4"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
