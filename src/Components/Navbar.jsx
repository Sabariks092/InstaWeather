import React from 'react'

export const Navbar = () => {
    return (
        <div>
            <nav class="navbar m-2 p-3 navbar-expand-lg" style={{backgroundColor:"rgb(11,19,30)"}}>
                <div class="container-fluid">
                    <a class="navbar-brand text-white" href="#"><span style={{color: "rgb(251,255,0)"}}>InstaWeather! </span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{}}>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">About us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Contact us </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
