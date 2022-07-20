import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import LoginWidget from "./LoginWidget";

export default {
  title: "BHN/LoginWidget",
  component: LoginWidget,
  
} as ComponentMeta<typeof LoginWidget>;

const Template: ComponentStory<typeof LoginWidget> = (args) => <LoginWidget {...args} />;

export const Default = Template.bind({});


Default.parameters = {
  docs: {
    source: {
      code: '<LoginWidget/>',
      language: "html",
      type: "auto",
    },
  },
};