import React from "react";
import { VideoTypes } from "./components/video/duck";
import { Video, Info } from "./components";
import styles from "./App.module.css";

const src = `${process.env.REACT_APP_URL}/2.P_13.4_ForceandMotionQC_1.m3u8`;

const transcriptons: VideoTypes.Transcription[] = [
  {
    id: "english",
    src: `${process.env.REACT_APP_URL}/force_and_motion_en.vtt`,
    label: "english",
  },
  {
    id: "alternative",
    src: `${process.env.REACT_APP_URL}/Force_and_Motion_(Alternative).vtt`,
    label: "alternative en",
  },
  {
    id: "spanish",
    src: `${process.env.REACT_APP_URL}/force_and_motion_spa.vtt`,
    label: "spanish",
  },
];
const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Video src={src} transcriptons={transcriptons} className={styles.video} />
        <Info className={styles.info} />
      </div>
    </div>
  );
};

export default App;
