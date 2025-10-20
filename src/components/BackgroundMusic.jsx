import { useEffect, useRef, useState } from "react";

const BackgroundMusic = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/android|iPad|iPhone|iPod/i.test(userAgent)) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      // Try autoplay on desktop
      audioRef.current?.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center !opacity-50 ">
      <audio ref={audioRef} src={src} loop preload="auto" />
      <button
        onClick={toggleAudio}
        className="bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        {isPlaying ? "🔊" : "🔈"}
      </button>
      {isMobile && !isPlaying && (
        <p className="text-sm text-gray-200">
          Tap play to start background music
        </p>
      )}
    </div>
  );
};

export default BackgroundMusic;
