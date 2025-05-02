import React from 'react'

function PersonalInfoForm() {
  return (
    <div>
        <h1>Personal Information section</h1>
        <div>
        <label >Name</label>
        <input type="text" placeholder='enter your name'/>
        </div>
        <div>
        <label >Name</label>
        <input type="email" placeholder='enter your Email'/>
        </div>
        <div>
        <label >Name</label>
        <input type="number" placeholder='enter your PhoneNumber'/>
        </div>

    </div>
  )
}

export default PersonalInfoForm