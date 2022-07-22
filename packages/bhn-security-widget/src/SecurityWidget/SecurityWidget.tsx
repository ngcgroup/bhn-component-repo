import React, { PropsWithChildren, useEffect } from "react";
import { useState } from "react";
import "./SecurityWidget.scss";

export interface ISecurityWidget {
  datadome_key: '';
}

const SecurityWidget = ({ datadome_key }: PropsWithChildren<ISecurityWidget>) => {

  const [foo, setFoo] = useState(null);
  const [localfoo, setLocalFoo]= useState(null);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
    const s = document.getElementById('datadome-script')? document.getElementById('datadome-script') : document.createElement('script');
    if(!s.id) {
      s.id =  'datadome-script';
      s.type = 'text/javascript';
      s.async = true;
      s.innerHTML = '!function(a,b,c,d,e,f){a.ddjskey=e;a.ddoptions=f||null;var m=b.createElement(c),n=b.getElementsByTagName(c)[0];m.async=1,m.src=d,n.parentNode.insertBefore(m,n)}(window,document,"script","https://js.datadome.co/tags.js","' + datadome_key + '", { ajaxListenerPath : ["/api", "domain.com/other-api"], allowHtmlContentTypeOnCaptcha : true });';
      document.head.appendChild(s);
      console.log('widget loaded successfully')
    }   
  });
  return (
    <div id="dd"></div>
  );

};

export default SecurityWidget;
