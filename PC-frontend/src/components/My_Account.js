import React, { Component } from 'react'


class My_Account extends Component {
  state ={

  }
  render(){
    return(

      <div>
      <div className='search-border-outer-box'>
        <div className='search-border-inner-box'>
          <div className='searchbox'>
            <h1 className='account-title'><b>My Account Info.</b></h1>
            <br />
            <h3 class='account-info'>User Name:</h3>
            <br />
            <h3 class='account-info'>Name:</h3>
            <br />
            <h3 class='account-info'>Address Line 1:</h3>
            <br />
            <h3 class='account-info'>Address Line 2:</h3>
            <br />
            <h3 class='account-info'>City:</h3>
            <br />
            <h3 class='account-info'>State:</h3>
            <br />
            <h3 class='account-info'>Zip:</h3>
            <br />
            <h3 class='account-info'>Phone:</h3>
            <br />

          </div>
          <h3><button className='account-info-cancel-button'>Cancel</button></h3>
      </div>
      </div>
    </div>

    )
  }
}

export default My_Account