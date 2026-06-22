import "@videojs/react/video/skin.css";
import { createPlayer } from "@videojs/react";
import {
  videoFeatures,
  VideoSkin,
  Video as VideoMedia,
} from "@videojs/react/video";
import defaultVideo from "@/assets/video/rickrolled.mp4";

const Player = createPlayer({ features: videoFeatures });

interface VideoProps {
  src?: string;
  className?: string;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

export const Video = ({
  src = defaultVideo,
  className = "",
  loop = false,
  muted = false,
  playsInline = true,
}: VideoProps) => {
  return (
    <div
      className={`mx-auto w-full max-w-[90dvw] overflow-hidden rounded-2xl bg-black shadow-sm ${className}`}
    >
      <Player.Provider>
        <VideoSkin>
          <VideoMedia
            src={src}
            loop={loop}
            muted={muted}
            playsInline={playsInline}
          />
        </VideoSkin>
      </Player.Provider>
    </div>
  );
};
