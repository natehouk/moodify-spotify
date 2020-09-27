import React, { useState, useEffect, useContext } from 'react';
import { StateContext } from '../../App';
import styled from 'styled-components';
import { Radar } from 'react-chartjs-2';

const RadarChartContainer = styled.div`
  width: 100%;
  height: 100%;

  h2 {
    margin-bottom: 30px;
  }
`;

export default function RadarChart(props) {
  const [ chartValues, setChartValues ] = useContext(StateContext).ChartValues;
  const [ chartData, setChartData ] = useContext(StateContext).ChartData;

  const chart = () => {
    setChartData({
      labels: ['BPM', 'Speechiness', 'Energy', 'Valence', 'Danceability', 'Loudness'],
      datasets: [
        {
          data: [
            chartValues[0],
            chartValues[1],
            chartValues[2],
            chartValues[3],
            chartValues[4],
            chartValues[5]
          ],
          backgroundColor: 'rgba(50, 246, 152, 0.7)',
          borderColor: 'rgb(50, 246, 152)',
          borderWidth: 1,
          pointBackgroundColor: 'rgb(50, 246, 152)',
          pointBorderWidth: 1,
          fontColor: '#fff',
        }
      ]
    });
  };

  const chartOptions = {
    responsive: true,
    legend: {
      display: false
    },
    scale: {
      ticks: {
        callback: function() {return ""},
        backdropColor: "rgba(0, 0, 0, 0)",
        beginAtZero: true,
        min: 0,
        max: 100,
      },
      pointLabels: {
        fontColor: 'white'
      },
      gridLines: {
        color: 'white'
      },
      angleLines: {
        color: 'white'
      }
    },
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
    }
  }

  useEffect(() => {
    chart();
  },[])

  return(
    <RadarChartContainer>
      <h2>Curate Your Playlist</h2>
      <Radar data={chartData} options={chartOptions} />
    </RadarChartContainer>
  );
};