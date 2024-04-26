import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import {Tooltip,Legend,} from "chart.js/auto"

function Overview() {
    const data2 = [
        { name: "Jan", value: 400 },
        { name: "Feb", value: 300 },
        { name: "Mar", value: 500 },
        { name: "Apr", value: 600 },
        { name: "May", value: 400 },
        { name: "Jun", value: 700 },
      ];
  return (
    <div>

        <div className="col-6 mt-4 bg-white">
          <p className="text-center">Sales Overview</p>
          <LineChart width={600} height={230} data={data2}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </div>
    </div>
  )
}

export default Overview