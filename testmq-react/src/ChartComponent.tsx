import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';



ChartJS.register(ArcElement, Tooltip, Legend);

const dadada = [15,12]

export const data = {

  
  labels: ['Red', 'Blue' ],
  datasets: [
    {
      label: '# of Votes',
      data: dadada  ,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};




function ChartComponent() {


  return <Pie data={data} />;
}

export default ChartComponent;