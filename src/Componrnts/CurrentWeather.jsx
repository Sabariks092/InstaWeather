import React from 'react'
import '../Componrnts/components.css'

export const CurrentWeather = ({ current, location }) => {
    return (
        <div className='container text-white text-center '>
            <h5 className='text-white text-center mt-4'>Current Weather of <span style={{color: "rgb(251, 255, 0)"}}>{location.name}</span>, {location.region}, {location.country}</h5>
            <div className='row mt-4'>
                <div className='col-12'>
                    <div className="condition-card card ">
                        <img src={current.condition.icon} className="card-img-top " />
                            <h5 className="card-title pb-3" >{current.condition.text}</h5>
                    </div>
                </div>
                </div>

                <div className='row'>
                    <div className='col-4 mt-4'>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"> temp in c : {current.temp_c}</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 mt-4'>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"> temp in f : {current.temp_f}</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 mt-4'>
                        <div className="card">
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
