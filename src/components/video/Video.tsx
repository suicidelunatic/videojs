/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from "react";
import classNames from "classnames";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-hls-quality-selector";
import "videojs-hls-quality-selector/dist/videojs-hls-quality-selector.css";
import 'videojs-contrib-quality-levels';
import "./plugins/transcription/plugin";
import { VideoTypes } from "./duck";
import styles from "./Video.module.css";

interface VideoProps {
  className?: string;
  options?: any;
  autoResolution?: boolean;
  transcriptons: VideoTypes.Transcription[];
  onError?: React.DOMAttributes<HTMLVideoElement>["onError"];
  sources: {
    src: string;
    type: string;
  }[];
}

type VideoPlayer = videojs.Player & {
  updateSrc: (...args: any[]) => void;
  transcriptionSelector: () => videojs.Player;
};

const Video: React.FC<VideoProps> = ({
  options,
  className,
  transcriptons,
  sources,
  onError = () => {},
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const transcriptonContainerRef = React.useRef<HTMLDivElement>(null);
  const playerRef = React.useRef<VideoPlayer>();

  const posterError = React.useRef(false);
  const [isTranscriptionsHidden, setIsTranscriptionsHidden]= React.useState(true);

  React.useEffect(() => {
    if (playerRef.current && playerRef.current.dispose) {
      playerRef.current.dispose();
    }
    if (!videoRef.current) {
      return;
    }
    playerRef.current = videojs(
      videoRef.current,
      {
        controls: true,
        fluid: true,
        sources,
        plugins: {
          hlsQualitySelector: { displayCurrentQuality: true },
          transcriptionSelector: {
            // defaultTranscriptId: "english",
            container: transcriptonContainerRef.current,
            onOpen: () => setIsTranscriptionsHidden(false),
            onClose: () => setIsTranscriptionsHidden(true),
          },
        },
        ...options,
      },
    ) as VideoPlayer;

    return () => {
      playerRef.current?.dispose();
    };
  }, []);

  React.useEffect(() => {
    playerRef.current?.width(options?.width);
  }, [options?.width]);

  React.useEffect(() => {
    playerRef.current?.height(options?.height);
  }, [options?.height]);

  // use smth else
  const fetchTranscription = async (
    transcriptons: VideoTypes.Transcription[]
  ) => {
    const responses = await Promise.all(
      transcriptons.map((transcripton) => fetch(transcripton.src))
    );
    return await Promise.all(responses.map((response) => response.text()));
  };

  React.useEffect(() => {
    if (transcriptons) {
      fetchTranscription(transcriptons)
        .then((texts) => {
          const preparedTranscription = transcriptons.map(
            (transcripton, index) => ({
              id: transcripton.id,
              label: transcripton.label,
              value: texts[index],
            })
          );

          playerRef.current
            ?.transcriptionSelector()
            .trigger("addTranscription", { data: preparedTranscription });
        })
        .catch(() => {});
    }
  }, [transcriptons]);

  return (
    <div className={classNames(className, styles.wrapper)}>
      <video
        ref={videoRef}
        className="video-js"
        onError={(event) => {
          if (posterError.current) {
            onError(event);
          }
        }}
      />
      <div className={classNames(styles.transcript, {
        [styles.hidden]: isTranscriptionsHidden,
      })}>
        <div className={styles.transcriptHeader}>Video transcript</div>
        <div
          ref={transcriptonContainerRef}
          className={styles.transcriptContainer}
        />
      </div>
    </div>
  );
};

export default Video;
