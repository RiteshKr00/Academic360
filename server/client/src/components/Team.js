import React from 'react'
import '../css/Team.css'
import Dimple from "../img/dimple.jpeg"
import Ritesh from "../img/ritesh.jpeg"
import Varun from "../img/varun.png"


const Team = () => {
  return (
    <>

    <div className='Team_title'>
    <br />  
    <h1> <b>Team Members</b></h1>
    </div>

   <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={Varun} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Varun kumar</h5>
        <p>FrontEnd Developer</p>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={Dimple} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Dimple Verma</h5>
        <p>Project Lead</p>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={Ritesh} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Ritesh Kumar</h5>
        <p>backEnd Developer</p>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>

     </>
  )
}

export default Team
