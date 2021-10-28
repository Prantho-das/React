import axios from "axios";
import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useSelector } from "react-redux";
import toastify from "../helper";
function Dashboard() {
  const state = useSelector(state => state.auth)
  const [dashboard, setDashboard] = useState({})
  const dashboardData = async () => {
    try {
      let res = await axios.get('api/dashboard')
      if (res.status === 200) {
        setDashboard({ ...res.data })
      }
    } catch (error) {
      console.log(error)
      toastify('error', "Some Problem Happend")
    }
  }
  useEffect(() => {
    dashboardData()
  }, [])
  return (
    <>
    <Helmet>
      <title>laracommerse | dashboard</title>
    </Helmet>
      {state.auth ?
        <div className='p-4'>
          <div className="row">
            {
              Object.entries(dashboard).map((element, i) => {
                return <div key={i} className="col-md-3 m-md-1 m-2 m col-sm-6 col-12 shadow-lg rounded-lg py-5 text-center">
                  <h3>{element[1]}</h3>
                  <h4>{element[0]}</h4>
                </div>
              })
            }
          </div>
        </div>
        :
        <h1 style={{ textAlign: "center", marginTop: "1rem" }}>Log in First</h1>}
    </>
  );
}

export default Dashboard;
