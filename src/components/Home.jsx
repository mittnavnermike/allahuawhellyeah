import React, { Component } from 'react';
import autoBind from 'auto-bind';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../utils/sketch.js';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            currentStation: 2,
            stations: [
                {
                    name: '۩ الزاوية التجانية ۩',
                    art: 0,
                    url: 'https://tunein.com/embed/player/s269623?autoplay=true',
                },
                {
                    name: 'إذاعة السنة',
                    art: 1,
                    url: 'https://tunein.com/embed/player/p821597?autoplay=true',
                },
                {
                    name: 'إذاعة زايد للقرآن الكريم',
                    art: 2,
                    url: 'https://tunein.com/embed/player/s140482?autoplay=true',
                },
            ]
        };
        autoBind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isReady: true,
            })
        }, 20000)
    }

    setStation(key) {
        this.setState({
            currentStation: key,
        })
    }

    render() {
        const { currentStation, stations } = this.state;
        return(
            <article>
                <p className="center">🎵 Current track 🎵</p>
                <div className="current-track">
                    <div className="current-track__content">
                        <img src={`/assets/images/${stations[currentStation].art}.jpg`} alt=""/>
                        <p className="current-track__title">{stations[currentStation].name}</p>
                    </div>
                </div>
                <P5Wrapper sketch={sketch} />
                { this.state.isReady
                    &&
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
                        </audio>
                }
                <iframe
                    src={stations[currentStation].url}
                    frameBorder="0"
                    style={{
                        display: 'none',
                        width:'64px',
                        height:'22px',
                    }}
                    scrolling="no"
                />
            <div className="display">
                <div className="display__item">
                    <h1>{stations[currentStation].name}</h1>
                </div>
                <div className="display__item">
                    <img src={`/assets/images/${stations[currentStation].art}.jpg`} alt=""/>
                </div>
            </div>
                <ul className="stations">
                    {
                        stations.map((station, key) =>
                            <li className="stations__item" key={key} onClick={() => this.setStation(key)}>{currentStation === key ? '🎧' : '▶︎'} Track {key + 1}</li>
                        )
                    }
                </ul>
            </article>
        )
    }
}

export default Home;
