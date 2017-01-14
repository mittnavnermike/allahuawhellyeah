import React from 'react';

const Home = () => (
    <article>
        <iframe
            src="http://tunein.com/embed/player/s269623?autoplay=true"
            frameBorder="0"
            style={{
                display: 'none',
                width:'64px',
                height:'22px',
            }}
            autoPlay="true"
            scrolling="no"
            ></iframe>
        <audio
            controls
            autoPlay
            loop
            style={{
                display: 'none',
            }}
        >
            <source
                src="/assets/audio/346193__frankum__techno-80-base-loop.mp3"
            />
            Your browser does not support the audio element.
        </audio>
    </article>
)

export default Home;
