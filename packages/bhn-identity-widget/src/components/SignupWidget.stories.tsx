import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SignupWidget from "./SignupWidget";

export default {
  title: "BHN/SignupWidget",
  component: SignupWidget,
  
} as ComponentMeta<typeof SignupWidget>;

const Template: ComponentStory<typeof SignupWidget> = (args) => <SignupWidget {...args} />;

export const Default = Template.bind({});


Default.parameters = {
  docs: {
    source: {
      code: '<SignupWidget/>',
      language: "html",
      type: "auto",
    },
  },
};