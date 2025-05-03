
function PersonalInfoForm({personalinfo ,setpersonalinfo}) {   
  function handleNameChange(e) {
    setpersonalinfo(prev => ({...prev, name: e.target.value}));
  }

  function handleEmailChange(e) {
    setpersonalinfo(prev => ({...prev, email: e.target.value}));
  }

  function handlePhoneChange(e) {
    setpersonalinfo(prev => ({...prev,phone: e.target.value}));
  }


  return (
    <div>
        <h1>Personal Information section</h1>
        <div>
        <label >Name</label>
        <input type="text" placeholder='enter your name' value={personalinfo.name } onChange={handleNameChange}/>
        </div>
        <div>
        <label >email</label>
        <input type="email" value={personalinfo.email} onChange={handleEmailChange} placeholder='enter your Email'/>
        </div>
        <div>
        <label >phone number</label>
        <input type="number" value={personalinfo.phone} onChange={handlePhoneChange} placeholder='enter your PhoneNumber'/>
        </div>
        
       
    </div>
  )
}

export default PersonalInfoForm