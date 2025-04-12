import { use, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Main.css";
import {animeShows, movies, tvShows} from './Data.js';
import {Footer} from './App.js';
const Navigation = () => {

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY > 50);
      console.log(scroll);
    }

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={"Navigation-main " + (scroll ? "down" : "")}>
      <div className="fancy-main">
        <span style={{ fontSize: "56px" }}>N</span>
        <span style={{ marginTop: "1px", fontSize: "53px" }}>E</span>
        <span style={{ marginTop: "2px", fontSize: "50px" }}>T</span>
        <span style={{ marginTop: "2px", fontSize: "50px" }}>F</span>
        <span style={{ marginTop: "2px", fontSize: "50px" }}>L</span>
        <span style={{ marginTop: "1px", fontSize: "53px" }}>I</span>
        <span style={{ fontSize: "56px" }}>X</span>
      </div>
      <div className="Link">
        <a>Home</a>
        <a>TV Shows</a>
        <a>Movies</a>
        <a>Latest</a>
        <a>My List</a>
      </div>
      <input text="text" placeholder="Search"></input>
    </div>
  );
};
const Button = (props) => {
  return (
    <div
      className="Button-Main"
      style={{
        color: props.color,
        backgroundColor: props.bg,
        border: `2px solid ${props.border} `,
        justifySelf: props.align,
      }}
    >
      <span className="icon-main">{props.icon}</span>
      <h6>{props.text}</h6>
    </div>
  );
};

const MovieCard=(props)=>{
    return <div className="MovieCard" >
        <h3 style={{position:"absolute"}}>{props.content}</h3>
        <div></div>
        <div className="MovieCardContainer">
            {props.list.map((data)=>{
                return <div className="Card-Main" style={{backgroundImage:`url(${data.path})`}}><h5>{data.name}</h5></div>
            })}
        </div>

    </div>
}
const Movies = (props) => {
  return (
    <div className="Movies">
      <div className="sort">
        <h3>Hi <span style={{color:"#2095ca"}}>{props.text}</span>, Recommendation Based on Your Interest</h3>
        <select class="custom-dropdown">
          <option value="" disabled selected hidden>
            Select an option
          </option>
          <option value="movies">Movies</option>
          <option value="tvshows">TV Shows</option>
          <option value="latest">Latest</option>
        </select>
      </div>
      <MovieCard content="Movies Everyone Is Talking About This Week" list={movies}></MovieCard>
      <MovieCard content="TV Shows That Will Keep You Hooked All Night" list={tvShows}></MovieCard>
      <MovieCard content="Anime Series You Absolutely Shouldn’t Miss This Year" list={animeShows}></MovieCard>
      <div className="MoviesList"></div>
    </div>
  );
};
const MostPlayed = () => {
  return (
    <div className="MostWatched" style={{    backgroundImage:`linear-gradient(135deg , black,rgba(0, 0, 0, 0.558),rgba(255, 255, 255, 0.1)), url("/images/johnWick.webp")`}}>
      <div className="TiteCard">
        <div className="Title"></div>
        <div className="Description">
          <div className="about">
            <h6>2025 |</h6>
            <button> 18+ </button>
            <h6>| 2hrs 33min</h6>
            <h6>| Action</h6>
          </div>
          <p style={{ color: "#f0ffffd0", textAlign: "left" }}>
            When a retired hitman is forced back into the underworld to avenge
            the death of his beloved dog—his last gift from his late wife—he
            unleashes a relentless storm of vengeance against those who wronged
            him. With stylish action, intense gun-fu, and an unbreakable will,
            John Wick proves that you should never mess with a man who has
            nothing left to lose.
          </p>
          <div className="button-div">
            <Button
              color="white"
              bg="red"
              text="PLAY"
              border="red"
              icon={<i class="bi bi-play-fill"></i>}
              align="end"
            />
            <Button
              color="white"
              bg="transparent"
              text="MY LIST"
              border="transparent"
              icon={<i class="bi bi-plus"></i>}
              align="start"
            />
            <Button
              color="white"
              bg="transparent"
              text="WATCH TRAILER"
              border="transparent"
              icon={<i class="bi bi-play-circle"></i>}
              align="start"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const Main = () => {
  const location = useLocation();
  const username = location.state.text;
  return (
    <div>
      <Navigation />
      <MostPlayed />
      <Movies text={username} />
      <Footer/>
    </div>
  );
};
export default Main;
