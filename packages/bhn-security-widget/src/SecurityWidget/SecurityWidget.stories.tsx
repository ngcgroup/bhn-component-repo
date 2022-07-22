import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CaptchaToggleWidget from "./CaptchaToggleWidget";
import SecurityWidget from "./SecurityWidget";

export default {
  title: "BHN/SecurityWidget",
  component: SecurityWidget,
  decorators: [
    (Story) => (
      <div>
        <CaptchaToggleWidget/>
      </div>
    ),
  ],
} as ComponentMeta<typeof SecurityWidget>;

const Template: ComponentStory<typeof SecurityWidget> = (args) => <SecurityWidget {...args} />;

export const Default = Template.bind({});



Default.args = {
  datadome_key: sessionStorage.getItem('datadome_key') as string,
};

const headers:any = { 
  'Content-Type': 'application/json' , 
  
};

const url=`/config`;

if ( !sessionStorage.getItem('datadome_key'))  {
fetch(url, { credentials: 'include', method: 'GET', headers: headers})
    .then( (response: any) => response.json())
    .then( (data:any) => { 
      const client_key = data.client_key;  
      sessionStorage.setItem('datadome_key',client_key )
      Default.args.datadome_key = client_key;
      console.log(data); 
    } );
}

Default.parameters = {
  docs: {
    source: {
      code: '<SecurityWidget datadome_key="xxx">',
      language: "html",
      type: "auto",
    },
  },
};