import React, { Component } from 'react'
import us from '../components/media/images/us.jpg'
import Izzy from '../components/media/images/Izzy.jpg'



class Profile extends Component {
  state = {

  }
  render(){
    return (
    <div className='profile'>
      <h4 align='left' className='profile-grabber'><b>Title:</b></h4>
        <img src={us} className='dater-pic' width='400' height='400' alt='dater-pic'/>
          <p><h1 className='profile-username'>User Name</h1></p>
          <br />
          <br />
          <br />
          <p><h4>Location City:</h4></p>
          <br />
          <p><h4>Location State:</h4></p>
          <br />
          <p><h4>Looking For:</h4></p>
          <br />
          <p><h4>Smoker:</h4></p>
          <br />
          <p><h4>Vaper:</h4></p>
          <br />
          <div className='profile-aboutme'>
            <p><h5><b>About Me:</b></h5></p>
          </div>
          <p><h4>Body Type:</h4></p>
          <br />
          <p><h4>Ethnicity:</h4></p>
          <br />
          <p><h4>Children:</h4></p>
          <p><h4 className='children'>How many:</h4></p>
        <img src={Izzy} alt='dog' className='dog-picture' width='400' height='400'/>
          <p><h4 className='dog-info'>Pet Name:</h4></p>
          <br />
          <p><h4 className='dog-info'>Breed:</h4></p>
          <br />
          <p><h4 className='dog-info'>Color:</h4></p>
          <br />
          <p><h4 className='dog-info'>Age:</h4></p>
          
          <div className='about-pet'>
            <p><h5><b>About my pet:</b></h5></p>
          </div>
      
        

         
    </div>
    )
  }
}

export default Profile