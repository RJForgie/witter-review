import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import videos from "../videos.json";

const Home: NextPage = () => {
  const reviewVideos = videos.items.filter((video) =>
    video.snippet.title.includes("reviewed by")
  );

  console.log(reviewVideos);

  return (
    <div>
      <h1>Hello world</h1>
      <ul>
        {reviewVideos.map((video, index) => (
          <li key={index}>{video.snippet.title}</li>
        ))}
      </ul>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/TzxSyr53o1I"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Home;
