import React,{useState} from 'react';
import '../App.css';
import {Checkbox, FormControlLabel} from '@material-ui/core';



const LoginMain =()=>{

    let [disabled, setDisabled]= useState(true);
    let [checked, setChecked]= useState(true);

    const handleChange=(e)=>{

        setChecked(!checked)
        if(e.target.value === 'true')
            setDisabled(false);
        else setDisabled(true)
    }

    return(
        <div className='login-main'>
            <div className='login-header-top'>
                <h1>KHUDI</h1>
            </div>
            <div className='login-body'>
                <h2>who are you?</h2>
                <div className='login-users'>
                    <div className='login-buyer'>
                        <img src={require('../Images/buyer.png')} alt='buyer'/>
                        <button disabled={disabled} id='button'>buyer</button>
                    </div>
                    <div className='login-seller'>
                        <img src={require('../Images/seller.png')} alt='seller'/>
                        <button disabled={disabled} id='button'>worker</button>
                    </div>
                </div>
                <FormControlLabel className='checkbox-my'
                    control={<Checkbox 
                        value={checked}  
                        inputProps={{ 'title': 'terms and conditions'}} 
                        onChange={handleChange}
                        />}
                    label='I accept the terms and conditions'/>

                <p>Don't worry you can change this later</p>
            </div>
        </div>
    );
}

export default LoginMain;