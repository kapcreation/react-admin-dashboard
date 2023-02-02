import React from 'react'
import './Home.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Widget from '../../components/Widget/Widget'
import Featured from '../../components/Featured/Featured'
import Chart from '../../components/Chart/Chart'
import Table from '../../components/Table/Table'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widgets">
          <Widget context="user" />
          <Widget context="order" />
          <Widget context="earning" />
          <Widget context="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 months (Revenue)" />
        </div>
        <div className="list-container">
          <div className="title">Lastest transactions</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home