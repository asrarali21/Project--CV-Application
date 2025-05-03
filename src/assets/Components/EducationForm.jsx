import React from 'react'

function EducationForm({EducationInfo ,SetEducationInfo} ) {
       

  function handleSchoolName(e) {
     SetEducationInfo(prev =>({...prev , SchoolName:e.target.value }))

  }
  function handleTitleStudy(e) {
    SetEducationInfo(prev =>({...prev , TitleStudy:e.target.value }))
  }
  function handleSummary(e) {
    SetEducationInfo(prev => ({...prev, summary: e.target.value}));
  }



  return (
    <div>
      <h1>Education Information section</h1>
        <div>
        <label >School Name</label>
        <input type="text" placeholder='enter your name' value={EducationInfo.SchoolName} onChange={handleSchoolName}/>
        </div>
        <div>
        <label >Title of Study</label>
        <input type="text" placeholder='enter your title of study' value={EducationInfo.TitleStudy} onChange={handleTitleStudy} />
        </div>
        <textarea name="" id="" onChange={handleSummary}>

        </textarea>
       
    </div>
  )
}

export default EducationForm