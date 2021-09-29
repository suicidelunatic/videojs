import React from "react";
import { VideoTypes } from "./components/video/duck";
import { Video, Info } from "./components";
import styles from "./App.module.css";

const src = `${process.env.REACT_APP_URL}/2.P_13.4_ForceandMotionQC_1.m3u8`;

const transcriptons: VideoTypes.Transcription[] = [
  {
    id: "alternative",
    src: `${process.env.REACT_APP_URL}/Force_and_Motion_(Alternative).vtt`,
    label: "English",
  },
];
const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Video sources={[{
          src,
          type: 'application/x-mpegURL'
        }]} transcriptons={transcriptons} className={styles.video} />
        <Info className={styles.info} />
      </div>
    </div>
  );
};

export default App;
