import React, { useState, useEffect } from 'react'
import Chart from './components/Chart'
import { ClipboardData } from 'react-bootstrap-icons'
import useScreen from './constants/useScreen'

const rand = () => Math.floor(Math.random() * 255)

export default function Readings() {
    const genData = () => ({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            type: 'line',
            label: 'Dataset 1',
            borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
            borderWidth: 2,
            fill: false,
            data: [rand(), rand(), rand(), rand(), rand(), rand()],
          },
          {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
            data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
            borderColor: 'white',
            borderWidth: 2,
          },
          {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
            data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
          },
        ],
      })
    const dummyData = genData()
    const screen = useScreen()
  return (
    <>
      <h1 className="text-center" style={{fontWeight: '1'}}><ClipboardData className="ml-2 mb-2" size={30}/> Readings</h1>
      <Chart 
        data={dummyData}
        screen={screen}
      />
    </>
  )
}
