import { ILocalVideoTrack, IRemoteVideoTrack, ILocalAudioTrack, IRemoteAudioTrack } from "agora-rtc-sdk-ng";
import React, { useRef, useEffect } from "react";

const MediaPlayer = ({videoTrack, audioTrack}) => {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;
    videoTrack?.play(container.current);
    return () => {
      videoTrack?.stop();
    };
  }, [container, videoTrack]);
  useEffect(() => {
    if(audioTrack){
      audioTrack?.play();
    }
    return () => {
      audioTrack?.stop();
    };
  }, [audioTrack]);
  return (
    <div ref={container}  className="video-player" style={{ width: "320px", height: "240px"}}></div>
  );
}

export default MediaPlayer;