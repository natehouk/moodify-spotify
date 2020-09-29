import React, { useState, useEffect, useContext } from 'react';
import { StateContext } from '../../App';
import {mapRange} from '../../helpers/mapRange';

import styled from 'styled-components';
import Slider from '@material-ui/core/Slider';

const SlidersContainer = styled.div`
  width: 100%;
  height: 100%;

  .values-container {
    width: 100%;
    color: #ccc;
    font-size: 10px;
    text-align: right;
  }

  .sliders {
    width: 100%;
    color: white;

    .slider-container {
      width: 100%;

      .MuiSlider-colorPrimary {
        color: #2ed689;
      }

      .MuiSlider-markLabelActive {
        display: none;
      }

      .labelStyleOuter {
        width: '30px';
        height: '30px;';
        border-radius: '50% 50% 50% 0';
        background-color: red;
        position: absolute;
        transform: 'rotate(-45deg)';
        top: '-40px';
        left: '-9px';
      }

      .labelStyleInner {
      }
    }
  }
`;

export default function Sliders() {
  const [playlistMinMax, setPlaylistMinMax] = useContext(StateContext).PlaylistMinMax;

  const [tempo, setTempo] = useState([0, 0]);
  const [danceability, setDanceability] = useState([0, 0]);
  const [energy, setEnergy] = useState([0, 0]);
  const [instrumentalness, setInstrumentalness] = useState([0, 0]);
  const [loudness, setLoudness] = useState([0, 0]);
  const [valence, setValence] = useState([0, 0]);


  useEffect(() => {
    if (playlistMinMax.data.tempo) {
      setTempo(playlistMinMax.data.tempo);
      setDanceability(playlistMinMax.data.danceability);
      setEnergy(playlistMinMax.data.energy);
      setInstrumentalness(playlistMinMax.data.instrumentalness);
      setLoudness(playlistMinMax.data.loudness);
      setValence(playlistMinMax.data.valence);
    }
  }, [playlistMinMax.loaded]);
  


  // useEffect(() => {
  //   setChartValues([value1[1], value2[1], value3[1], value4[1], value5[1], value6[1]]);
  // },[value1[1], value2[1], value3[1], value4[1], value5[1], value6[1]]);

  return (
    <SlidersContainer>
      <div className="sliders">
        <div className="slider-container">
          <p>BPM</p>
          <Slider
            min={0}
            max={
              playlistMinMax.data.tempo && playlistMinMax.data.tempo[1] > 250 ? playlistMinMax.data.tempo[1] : 250
            }
            value={tempo}
            step={5}
            // marks={myMarks}
            onChangeCommitted= {(event, val) => {setPlaylistMinMax(prev => ({...prev, data:{...prev.data, tempo: val}}))}}
            onChange={(event, val) => {setTempo(val)}}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            valueLabelDisplay="auto"
            label={
              <div className="labelStyleOuter">
                <div className="labelStyleInner">73</div>
              </div>
            }
          />
        </div>
        <div className="slider-container">
          <p>instrumentalness</p>
          <Slider
            min={0}
            max={100}
            value={instrumentalness}
            onChangeCommitted= {(event, val) => {setPlaylistMinMax(prev => ({...prev, data:{...prev.data, instrumentalness: val}}))}}
            onChange={(event, val) => setInstrumentalness(val)}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            valueLabelDisplay="auto"
          />
        </div>
        <div className="slider-container">
          <p>Energy</p>
          <Slider
            min={0}
            max={100}
            value={energy}
            onChangeCommitted={(event, val) => {setPlaylistMinMax(prev => ({...prev, data:{...prev.data, energy: val}}))}}
            onChange={(event, val) => setEnergy(val)}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            valueLabelDisplay="auto"
          />
        </div>
        <div className="slider-container">
          <p>Valence</p>
          <Slider
            min={0}
            max={100}
            value={valence}
            onChangeCommitted={(event, val) => {setPlaylistMinMax(prev => ({...prev, data:{...prev.data, valence: val}}))}}
            onChange={(event, val) => setValence(val)}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            valueLabelDisplay="auto"
          />
        </div>
        <div className="slider-container">
          <p>Danceability</p>
          <Slider
            min={0}
            max={100}
            value={danceability}
            onChangeCommitted={(event, val) => {setPlaylistMinMax(prev => ({...prev, data:{...prev.data, danceability: val}}))}}
            onChange={(event, val) => setDanceability(val)}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            valueLabelDisplay="auto"
          />
        </div>
        <div className="slider-container">
          <p>Loudness</p>
          <Slider
            min={-60}
            max={0}
            value={loudness}
            onChangeCommitted={(event, val) => {setPlaylistMinMax(prev => ({...prev, data:{...prev.data, loudness: val}}))}}
            onChange={(event, val) => setLoudness(val)}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            valueLabelDisplay="auto"
          />
        </div>
      </div>
    </SlidersContainer>
  );
}
