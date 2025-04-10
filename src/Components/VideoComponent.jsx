import React, { useState, useRef } from 'react';

const VideoComponent = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="relative w-full h-screen overflow-hidden cursor-pointer" onClick={togglePlay}>
            <video
                ref={videoRef}
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover "
                poster="https://cdn.media.amplience.net/i/spreadshop/gary-vee-16-9-sp-EN-sub-partnership-announcement-at-veecon"
            >
                <source
                    src="https://cdn.media.amplience.net/v/spreadshop/gary-vee-16-9-sp-EN-sub-partnership-announcement-at-veecon/mp4_720p"
                    type="video/mp4"
                />
            </video>
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="bg-black/50 rounded-full p-4">
                        <svg
                            className="w-16 h-16 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
            )}
            <div className="absolute inset-0  bg-black/30 flex flex-col items-center  text-center p-6 z-10">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">
                    SOME YOUR BUSINESS
                </h1>

                <p className="text-2xl bg-amber-700 p-2 rounded-2xl md:text-3xl  mb-12 font-medium -rotate-6">
                    Do it like Gary Vee!
                </p>
            </div>
        </div>
    );
};

export default VideoComponent;