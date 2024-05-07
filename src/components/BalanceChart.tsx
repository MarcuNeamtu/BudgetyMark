import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import { useTheme } from 'styled-components'

const BalanceChart: React.FC = () => {
  const theme = useTheme()

  const [categories] = useState<string[]>(getLastSevenMonths())
  const [series] = useState([
    {
      name: 'balance',
      data: [80000, 101000, 129000, 91000, 83000, 123000, 150000],
    },
  ])

  const backgroundBarColors = Array(categories.length).fill('#E9EEF2')

  return (
    <Chart
      options={{
        chart: {
          id: 'basic-bar',
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: '20%',
            colors: {
              backgroundBarColors,
              backgroundBarOpacity: 1,
            },
          },
        },
        colors: [theme.colors.primary],
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories,
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        grid: {
          show: true,
          borderColor: '#E0E0E0',
          strokeDashArray: 0,
          position: 'back',
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      }}
      series={series}
      type="bar"
      width="340"
      height="300"
    />
  )
}

function getLastSevenMonths() {
  const currentDate = new Date()
  const months = []

  for (let i = 0; i < 7; i++) {
    months.push(currentDate.toLocaleString('default', { month: 'short' }))
    currentDate.setMonth(currentDate.getMonth() - 1)
  }

  return months.reverse()
}

export default BalanceChart