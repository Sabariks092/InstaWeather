import React from 'react'

export const CurrentWeather = ({ current, location }) => {
    return (
        <div className='container text-white text-center '>
            <h5 className='text-white text-center mt-4'>Current Weather of <span style={{color: "rgb(251, 255, 0)"}}>{location.name}</span>, {location.region}, {location.country}</h5>
            <div className='row mt-4'>
                <div className='col-12'>
                    <div className="condition-card card " style={{ backgroundColor: "rgb(32,43,59)", color:"aliceblue", alignItems: "center",justifyContent: "center"}}>
                        <img src={current.condition.icon} style={{width: "100px", height: "100px"}} className="card-img-top " />
                            <h5 className="card-title pb-3" >{current.condition.text}</h5>
                    </div>
                </div>
                </div>

                <div className='row'>
                    <div className='col-4 mt-4'>
                        <div className="card" style={{backgroundColor: "rgb(32,43,59)", color:"aliceblue"}}>
                            <div className="card-body">
                                <h5 className="card-title"> temp in c : {current.temp_c}</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 mt-4'>
                        <div className="card" style={{backgroundColor: "rgb(32,43,59)", color:"aliceblue"}}>
                            <div className="card-body">
                                <h5 className="card-title"> temp in f : {current.temp_f}</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 mt-4'>
                        <div className="card" style={{backgroundColor: "rgb(32,43,59)", color:"aliceblue"}}>
                            <div className="card-body">
                                <h5 className="card-title">Humidity : {current.humidity}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='mt-5' />
            </div>
    )
}
