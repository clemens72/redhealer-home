'use client';

import * as React from 'react';

interface Track {
  url: string;
  title: string;
  duration?: number;
}

interface AudioPlayerProps {
  tracks: Track[];
}

const paperStyle = {
  padding: '24px',
  borderRadius: '8px',
  boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
  backgroundColor: 'var(--background)',
  color: 'var(--foreground)',
};

const headingStyle = {
  fontSize: '1.5rem',
  marginBottom: '16px',
  fontWeight: '500',
  lineHeight: 1.6,
  letterSpacing: '0.0075em',
};

const dividerStyle = {
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  marginBottom: '16px',
};

const bodyTextStyle = {
  fontSize: '1rem',
  marginBottom: '16px',
  fontWeight: '400',
  lineHeight: 1.5,
  letterSpacing: '0.00938em',
};

const stackStyle: React.CSSProperties = { //  Corrected: use React.CSSProperties
  display: 'flex',
  flexDirection: 'column', //  <---  Use a valid FlexDirection value
  gap: '16px',
};

const playbackContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
};

const iconButtonStyle = {
  padding: '8px',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: 'var(--accent)',
  color: 'var(--foreground)',
  cursor: 'pointer',
  transition: 'all 0.2s',
  '&:hover': {
    transform: 'scale(1.1)',
    backgroundColor: 'var(--accent-hover)',
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const progressBarStyle = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
};

const timeTextStyle = {
  fontSize: '0.75rem',
  minWidth: '45px',
  fontWeight: '400',
  lineHeight: 1.66,
  letterSpacing: '0.03333em',
};

const trackButtonStyle = {
  padding: '12px 16px',
  backgroundColor: 'var(--background)',
  cursor: 'pointer',
  transition: 'all 0.2s',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: 'none',
  textAlign: 'left' as const,
  color: 'var(--foreground)',
  '&:hover': {
    backgroundColor: 'var(--accent)',
  },
};

const activeTrackButtonStyle = {
  ...trackButtonStyle,
  backgroundColor: 'var(--accent)',
  fontWeight: '500',
};

const trackListStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '4px',
  marginTop: '8px',
};

const trackDurationStyle = {
  color: 'var(--muted-foreground)',
  fontSize: '0.875rem',
};

const PlayArrowIconComponent = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" style={{ fill: 'currentColor' }}>
        <path d="M8 5v14l11-7z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
);

const PauseIconComponent = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" style={{ fill: 'currentColor' }}>
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
);
  
const sliderStyle: React.CSSProperties = {
  width: '100%',
  height: '6px',
  borderRadius: '5px',
  background: 'var(--accent)',
  outline: 'none',
  WebkitAppearance: 'none',
  appearance: 'none' as const,
};

const sliderThumbStyle = {
  WebkitAppearance: 'none',
  appearance: 'none',
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  background: 'var(--primary)',
  cursor: 'pointer',
};

export default function AudioPlayer({ tracks }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = React.useState(0);
  const [trackDurations, setTrackDurations] = React.useState<number[]>([]);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const currentTrack = tracks[currentTrackIndex];

  // Load durations for all tracks
  React.useEffect(() => {
    const loadDurations = async () => {
      const durations = await Promise.all(
        tracks.map(track => {
          return new Promise<number>((resolve) => {
            const audio = new Audio(track.url);
            audio.addEventListener('loadedmetadata', () => {
              resolve(audio.duration);
            });
          });
        })
      );
      setTrackDurations(durations);
    };
    loadDurations();
  }, [tracks]);

  React.useEffect(() => {
    // Reset player state when track changes
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  }, [currentTrackIndex]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error("Error playing audio:", error);
            setIsPlaying(false);
          });
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleTimeSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newValue = parseFloat(event.target.value);
      audioRef.current.currentTime = newValue;
      setCurrentTime(newValue);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div style={paperStyle}>
      <audio
        ref={audioRef}
        src={currentTrack.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
     
      <div style={stackStyle}>
        <div style={{ marginBottom: '16px' }}>
          <div style={trackListStyle}>
            {tracks.map((track, index) => (
              <button
                key={index}
                onClick={() => setCurrentTrackIndex(index)}
                style={index === currentTrackIndex ? activeTrackButtonStyle : trackButtonStyle}
              >
                <span>{track.title}</span>
                <span style={trackDurationStyle}>
                  {trackDurations[index] ? formatTime(trackDurations[index]) : '--:--'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Playback Progress */}
        <div style={playbackContainerStyle}>
          <button style={iconButtonStyle} onClick={handlePlayPause}>
            {isPlaying ? <PauseIconComponent /> : <PlayArrowIconComponent />}
          </button>

          <div style={progressBarStyle}>
            <span style={{...timeTextStyle, color: 'var(--muted-foreground)'}}>
              {formatTime(currentTime)}
            </span>
            <input
              type="range"
              value={currentTime}
              max={duration}
              onChange={handleTimeSliderChange}
              aria-label="time-indicator"
              style={sliderStyle}
            />
            <span style={{...timeTextStyle, color: 'var(--muted-foreground)'}}>
              {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
