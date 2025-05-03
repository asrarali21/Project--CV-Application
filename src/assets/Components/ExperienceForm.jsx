import React from 'react'

function ExperienceForm({ExperienceInfo,setExperienceInfo} ) {
     function handleCompany(e) {
      setExperienceInfo(prev =>({...prev , company:e.target.value}))
     }
     function handlePositon(e) {
      setExperienceInfo(prev =>({...prev , position:e.target.value}))
     }
  return (
    <div>
       <h1>Experience section</h1>
        <div>
        <label >company name</label>
        <input type="text"   placeholder='enter your company name' value={ExperienceInfo.company} onChange={handleCompany}/>
        </div>
        <div>
        <label >position title</label>
        <input type="email" value={ExperienceInfo.position} onChange={handlePositon} placeholder='enter your position'/>
        </div>
       
    </div>
  )
}

export default ExperienceForm