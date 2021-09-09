import * as React from "react";
import classNames from "classnames";
import ccExample from "../../assets/images/captions-example.png";
import adExample from "../../assets/images/audio-tracks-example.png";
import trExample from "../../assets/images/transcriptions-example.png";
import styles from "./Info.module.css";

interface InfoProps {
  className?: string;
}

const Info: React.FC<InfoProps> = ({ className }) => (
  <div className={classNames(styles.wrapper, className)}>
    <div className={styles.item}>
      <div className={styles.imageWrapper}>
        <img src={ccExample} alt="Close Captions example" className={styles.image}/>
      </div>
      <div className={styles.description}>
        Provide captions (also called “subtitles”) so that people who are Deaf and hard-of-hearing get a text version of the speech and non-speech audio information needed to understand the content. <a href="https://www.w3.org/WAI/media/av/captions/">See more...</a>
      </div>
    </div>
    <div className={styles.item}>
      <div className={styles.imageWrapper}>
        <img src={adExample} alt="Audio Descriptions example" className={styles.image}/>
      </div>
      <div className={styles.description}>
        Provide description so that people who are blind and others who cannot see the video adequately get the visual information needed to understand the content. This includes things like charts, graphs, and text such as speaker names, titles, and e-mail addresses. <a href="https://www.w3.org/WAI/media/av/description/">See more...</a>
      </div>
    </div>
    <div className={styles.item}>
      <div className={styles.imageWrapper}>
        <img src={trExample} alt="Transcriptions example" className={styles.image}/>
      </div>
      <div className={styles.description}>
        Provide a transcript, that is, a text version of the speech and non-speech audio information. Ideally, make it a descriptive transcript that also includes text description of the visual information. Descriptive transcripts are required to provide video content to people who are both Deaf and blind. <a href="https://www.w3.org/WAI/media/av/transcripts/">See more...</a>
      </div>
    </div>
  </div>
);

export default Info;