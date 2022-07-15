import React, { PropsWithChildren, useEffect } from "react";
import { useState } from "react";
import "./SecurityWidget.scss";
import { DataDome, DataDomeModal, DataDomeFetch } from '@datadome/react-native-datadome';

var fetch = DataDomeFetch;

export interface ISecurityWidget {
  type: "primary" | "secondary";
}

const SecurityWidget = ({ children, type }: PropsWithChildren<ISecurityWidget>) => {

  const [foo, setFoo] = useState(null);
  const [localfoo, setLocalFoo]= useState(null);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = '!function(a,b,c,d,e,f){a.ddjskey=e;a.ddoptions=f||null;var m=b.createElement(c),n=b.getElementsByTagName(c)[0];m.async=1,m.src=d,n.parentNode.insertBefore(m,n)}(window,document,"script","https://js.datadome.co/tags.js","41540A2EE9E17EB2F866D2DF07592F", { ajaxListenerPath : ["/api", "domain.com/other-api"], allowHtmlContentTypeOnCaptcha : true });';
    document.head.appendChild(s);
  });

  function handleChange(event:any) {
    setLocalFoo(event.target.value);
  }

  function sayHello() {
    //alert('Hello!');
    console.log('hello');
    const headers = { 'Content-Type': 'application/json' , 'user-agent': 'BLOCKUA'}
    const value=localfoo;
    //const url=`http://mockbin.org/bin/277690d0-f452-4e8d-9e67-bb48cb82a8fb/api?foo=${value}&foo=baz`
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    //fetch(`mockbin.org/request/api?foo=${value}`, { headers })
    fetch(url, { method: 'GET', headers: headers, datadome: true})
        .then( (response: any) => response.json())
        .then( (data:any) => { 
          setFoo(data.queryString.foo); 
          console.log(data); 
        } );
        
      
      
    return false;
  }

  return (
    <div>
      <label> value is {foo}</label>
      <br/>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange}/>
        </label>
        <br/>
        <button
          className={
            type === "primary" ? "devk__security--primary" : "devk__security--secondary"
          }
          onClick={sayHello}>
          {children}
        </button>
    </div>
  );
};

export default SecurityWidget;
