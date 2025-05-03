import React from 'react'
import './CvPreview.css'


function CvPreview(props) {
  return (
    <div className="cv-preview">
    <div className="cv-header">
      <h1>{props.personalinfo.name || 'Your Name'}</h1>
      <p>{props.personalinfo.email || 'Your Email'}</p>
      <p>{props.personalinfo.phone || 'Your Phone Number'}</p>
    
    </div>
    <div className="cv-section">
      <h2>Education</h2>
      <p><strong>School Name:</strong> {props.EducationInfo.SchoolName || 'Your School Name'}</p>
      <p><strong>Title of Study:</strong> {props.EducationInfo.TitleStudy || 'Your Title of Study'}</p>
      <h2>Professional Summary</h2>
      <p>{props.EducationInfo.summary || 'Your Professional Summary'}</p>

    </div>
    <div className="cv-section">
      <h2>Experience</h2>
      <p><strong>Company:</strong> {props.ExperienceInfo.company || 'Your Company Name'}</p>
      <p><strong>Position:</strong> {props.ExperienceInfo.position || 'Your Position Title'}</p>
    </div>
  </div>
  )
}

export default CvPreview