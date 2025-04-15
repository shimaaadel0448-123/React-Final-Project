import React from 'react'
import {
  BsFillArchiveFill,
  BsFillPaletteFill,
  BsPeopleFill,
  BsCartFill,
} from 'react-icons/bs'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';

function Home() {
  const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>Dashboard - Custom in Diamond Clothing</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>150</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>DESIGNS</h3>
            <BsFillPaletteFill className='card_icon' />
          </div>
          <h1>25</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CLIENTS</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>87</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>NEW ORDERS</h3>
            <BsCartFill className='card_icon' />
          </div>
          <h1>19</h1>
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#2962ff" />
            <Bar dataKey="uv" fill="#ff6d00" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#2962ff" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#ff6d00" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  )
}

export default Home;
