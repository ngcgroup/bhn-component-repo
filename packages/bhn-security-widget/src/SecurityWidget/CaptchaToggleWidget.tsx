import React, { PropsWithChildren, useEffect, useState } from "react";
//import { useCookies } from 'react-cookie';
import "./CaptchaToggleWidget.scss";


const CaptchaToggleWidget = () => {

  
  const [captchaState, setCaptchaState] =useState(sessionStorage.getItem('trigger-captcha') == 'true');
  //const [cookies, setCookie,removeCookie] = useCookies(['datadome']);

  const [dataDomeKey, setDataDomeKey] = useState(sessionStorage.getItem('datadomeClientKey'));
  const [foo, setFoo] = useState(null);
  const [localfoo, setLocalFoo]= useState(null);
  // Similar to componentDidMount and componentDidUpdate:

  function handleChange(event:any) {
    setLocalFoo(event.target.value);
  }

  function captchaToggleOn() {
    sessionStorage.setItem('trigger-captcha', 'true')
    setCaptchaState(true)
    return false;
  }
  function captchaToggleOff() {
    sessionStorage.setItem('trigger-captcha', 'false');
    setCaptchaState(false)
    return false;
  }

  function clearTest() {
    alert('delete the datadome cookie from browser')
    return false;
  }

  function testSecurityWidget() {
    //alert('Hello!');
    console.log('hello');
    var captcha=sessionStorage.getItem('trigger-captcha');
    const headers:any = { 
      'Content-Type': 'application/json' , 
      'accept': 'application/json' , 
      'captcha': sessionStorage.getItem('trigger-captcha') as string,
    };
    if(captcha=='true') {
      headers['User-Agent'] = 'NOUA';
    }
    const value=localfoo;
    const url=`/api?foo=${value}`;
    //const url=`http://localhost:8080/api?foo=${value}`;

    fetch(url, { credentials: 'include', method: 'GET', headers: headers})
        .then( (response: any) => response.json())
        .then( (data:any) => { 
          setFoo(data.message); 
          console.log(data); 
        } );
    return false;
  }


  return (
    <div>
      <span>This is a test interface for data dome </span>
      <br/>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange}/>
        </label>
        <br/>
        <label> Server Returned {foo}</label>
        <p/>
        <button
          onClick={captchaToggleOn}
          className={
            captchaState ? "devk__security--primary" : "devk__security--secondary"
          }
        >
          Captcha On
        </button>
        <button
          onClick={captchaToggleOff}
          className={
            captchaState ? "devk__security--secondary": "devk__security--primary"
          }
          >
          Captcha Off
        </button>

        <button
          className={ "devk__security--other" }
          onClick={testSecurityWidget}>
              Test Datadome
        </button>

        <button
          className={ "devk__security--clear" }
          onClick={clearTest}>
              Clear Test
        </button>
    </div>
  );
};

export default CaptchaToggleWidget;
