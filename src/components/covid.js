import React, { useEffect, useState } from 'react'
import './covid.css'
function Covid() {
    const [Data ,setData] = useState([]);
const  getCovidData = async () =>{
   
try {
    const res = await fetch('https://data.covid19india.org/data.json');
    console.log(res);
   const actualData = await res.json();
   console.log("actual data", actualData.statewise[0]);
   setData(actualData.statewise[0]);
} catch (error) {
    console.log("error",error)
}
   
} 
    useEffect(() => {
      
    getCovidData();
    }, [])
    
  return (
    <>
 <section className='showcase'>
    <h1 className='title'>😒Covid Details😒</h1>
    {/* <video src={require('./vedio1.mp4')} autoPlay loop muted></video> */}
</section>

      <section>

<ul>
    <li className='card'>
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name"> <span className>OUR</span> COUNTRY</p>
                <p className='card__total card__small'>PAKISTAN</p>

            </div>
        </div>
    </li>
    <li className='card'>
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name"> <span className>Total</span> RECOVERED</p>
                <p className='card__total card__small'>{Data.recovered}</p>

            </div>
        </div>
    </li>
    <li className='card'>
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name"> <span className>Total</span> CONFIRMED</p>
                <p className='card__total card__small'>{Data.confirmed}</p>

            </div>
        </div>
    </li>
    <li className='card'>
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name"> <span className>Total</span> DEATH</p>
                <p className='card__total card__small'>{Data.deaths}</p>

            </div>
        </div>
    </li>
    <li className='card'>
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name"> <span className>Total</span> ACTIVE</p>
                <p className='card__total card__small'>{Data.active}</p>

            </div>
        </div>
    </li>
    <li className='card'>
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name"> <span className>LAST</span> UPDATED</p>
                <p className='card__total card__small'>{Data.lastupdatedtime}</p>

            </div>
        </div>
    </li>
</ul>
      </section>
    </>
  )
}


export default Covid;
