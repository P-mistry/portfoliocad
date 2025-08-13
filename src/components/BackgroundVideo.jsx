import darkVideo from '../assets/darkbg.mp4';
import { useTheme } from '../common/ThemeContext.jsx';
import { useEffect, useRef, useState } from 'react';

function BackgroundVideo() {
  const { theme } = useTheme();
  const isLightTheme = theme === 'light';
  const videoRef = useRef(null);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setShouldReduceMotion(!!mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    const handleVis = () => {
      const v = videoRef.current;
      if (!v) return;
      if (document.hidden) {
        try { v.pause(); } catch (e) { /* no-op */ }
      } else if (!shouldReduceMotion) {
        try { v.play(); } catch (e) { /* no-op */ }
      }
    };
    document.addEventListener('visibilitychange', handleVis);
    return () => document.removeEventListener('visibilitychange', handleVis);
  }, [shouldReduceMotion]);

  // Reset fade when source changes
  useEffect(() => {
    setIsReady(false);
  }, [theme]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
      data-theme-overlay
    >
      {!shouldReduceMotion && !isLightTheme && (
        <video
          key={theme}
          ref={videoRef}
          style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', opacity: isReady ? 1 : 0, transition: 'opacity 400ms ease' }}
          src={darkVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          onLoadedData={() => setIsReady(true)}
        />
      )}
      {isLightTheme && (
        <div className="light-bg-gradient" />
      )}
      <div className="bg-video-overlay" />
    </div>
  );
}

export default BackgroundVideo;


