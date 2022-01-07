import React from 'react';
import img1 from './world map.png'
const Contact = () => {
    const handleOnSubmit=(e)=>{

    }
    return (
        <div >
            
            <h2 style={{margin:'50px'}}>Contact With us!!</h2>

<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>

<img src={img1} alt="" />
<form onSubmit={handleOnSubmit} >
<input type="text" placeholder='Email' style={{width:'100%',margin:'18px',padding:'18px'}} /> <br />
<input type="text" placeholder='Your Name' style={{width:'100%',margin:'18px',padding:'18px'}} />  <br />
<textarea type='text' placeholder='Write here' style={{width:'100%',margin:'18px',padding:'18px'}} />
<input type='submit'  style={{width:'100%',margin:'18px',padding:'18px'}}/>
             </form>
</div>
           
        </div>
    );
};

export default Contact;