
import './App.css'
import React, { useState ,useEffect } from 'react'



import CvPreview from './assets/Components/CvPreview'
import EducationForm from './assets/Components/EducationForm'
import ExperienceForm from './assets/Components/ExperienceForm'
import PersonalInfoForm from './assets/Components/PersonalInfoForm'

function App() {
      const [personalinfo , setpersonalinfo] = useState({
                                                          name :"",
                                                          email:"",
                                                          phone:"",
                                                         
                                                         })
      const [EducationInfo , SetEducationInfo] = useState({
                                                              SchoolName :"",
                                                              TitleStudy :"",
                                                              summary:""
                                                                })
const [ExperienceInfo , setExperienceInfo] = useState({
                                                     company :"",
                                                   position :"",
                                                  })

function handleSave() {
  localStorage.setItem('cvData', JSON.stringify({
    personalinfo,
    EducationInfo,
    ExperienceInfo,
  }));
  alert("Saved");
  
}

useEffect(() => {
  const savedData = JSON.parse(localStorage.getItem('cvData'));
  if (savedData) {
    if (savedData.personalinfo) setpersonalinfo(savedData.personalinfo);
    if (savedData.EducationInfo) SetEducationInfo(savedData.EducationInfo);
    if (savedData.ExperienceInfo) setExperienceInfo(savedData.ExperienceInfo);

  }
}, []);


  return (
    
     <>
   <h1>CV MAKER</h1>
    <div className="container">
      
      
      <div className="form-section">
     <PersonalInfoForm  personalinfo = {personalinfo}
     setpersonalinfo= {setpersonalinfo}/>
     <EducationForm EducationInfo={EducationInfo} SetEducationInfo={SetEducationInfo} />
     <ExperienceForm  ExperienceInfo ={ExperienceInfo}  setExperienceInfo={setExperienceInfo}/>  
   <button onClick={handleSave}>Save CV</button>
     </div>
     <CvPreview  personalinfo ={personalinfo}   EducationInfo={EducationInfo} ExperienceInfo ={ExperienceInfo}/>
   </div>

     </>
  )
}

export default App
