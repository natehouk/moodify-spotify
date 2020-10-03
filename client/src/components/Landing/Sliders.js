import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sliders from './assets/sliders.png';

const SlidersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: calc(100% - 40px);
  height: 60vh;
  color: white;

  .content-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text-container {
      width: 48%;
      max-width: 442px;

      h1 {
        font-size: 36px;
        letter-spacing: 2.4px;
        margin-bottom: 10px;
      }
      p {
        font-size: 18px;
        letter-spacing: 1px;
      }
    }

    .sliders {
      width: 48%;

      img {
        width: 100%;
      }
    }
  }
`;

export default () => {

  return (
    <SlidersContainer>
      <div className='content-container'>
        <div className='sliders'>
          <img src={sliders} />
        </div>
        <div className='text-container'>
          <h1>TOTAL CONTROL</h1>
          <p>use custom filtering based on spotify's audio features data to create the perfect playlsit for any mood</p>
        </div>
      </div>
    </SlidersContainer>
  )
};