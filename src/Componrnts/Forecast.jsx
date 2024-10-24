import React from 'react'

export const Forecast = ({ forecast, location}) => {
    return (
        <>
            <div >
                <h5 className='mt-5 mb-4 mx-3 text-center' style={{ color: "white", textAlign: "right" }}>Forecasting weather in <span style={{ color: "rgb(251, 255, 0)" }}>{location.name}</span> for the next <span style={{ color: "rgb(251, 255, 0)" }}>7 days</span></h5>
            </div>
            {forecast.forecastday.map((data, index) => {
                return (
                    <div className=" justify-content-center accordion mt-1 " id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target={`#${index}`} aria-expanded="false" aria-controls="flush-collapseOne">
                                    <div className="d-flex flex-row justify-content-evenly align-items-center text-center" style={{ color: "rgb(11,19,30)", width: "100%" }}>
                                        <div className=" "><h6>{data.date} </h6></div>
                                        <div className="p-2"> <img style={{ width: "60px", height: "60px" }} src={data.day.condition.icon} /></div>
                                        <div className="p-2"><h6>{data.day.condition.text}</h6></div>
                                        <div className="p-2"><h6> Min temp c : <span style={{ color: "green" }}> {data.day.mintemp_c}</span> </h6></div>
                                        <div className="p-2"><h6> Max temp c : <span  style={{ color: "red" }}>{data.day.maxtemp_c}</span></h6></div>
                                    </div>
                                </button>
                            </h2>
                            <div id={`${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    {data.hour.map((data,index) => {
                                        return (
                                            <>
                                                <div id={`${index}`} className="col-12 d-flex justify-content-evenly align-items-center flex-row mb-1" style={{ width: "100%" }}>
                                                    <div className="p-2 col-2.4"><h6>{data.time}</h6></div>
                                                    <div className="p-2 col-2.4"><h6>|</h6></div>
                                                    <div className="p-2 ms-col-2.4" ><img className='' style={{ width: "50px", height: "50px" }} src={data.condition.icon} alt="" /></div>
                                                    <div className="p-2 col-2.4"><h6>|</h6></div>
                                                    <div className="p-2 col-2.4"> <h6 className=' text-center '>  
                                                        {data.condition.text}
                                                    </h6>
                                                    </div>
                                                
                                                </div>

                                               <div id={`${index}`} className='mb-4 d-flex justify-content-center'>
                                                <div className="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: "30px", width:"75%" }}>
                                                    <div className="progress-bar " style={{  backgroundColor:"rgb(32,43,59)", width: `${data.temp_c}%`, height:"30px" }}>TEMP IN C : {data.temp_c}</div>
                                                </div>
                                               </div>
                                               <hr />
                                            </>

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                )
            })}

        </>
    )
}
