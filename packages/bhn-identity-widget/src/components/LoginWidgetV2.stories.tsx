import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import LoginWidgetV2 from "./LoginWidgetV2";

export default {
  title: "BHN/LoginWidgetV2",
  component: LoginWidgetV2,
  
} as ComponentMeta<typeof LoginWidgetV2>;

const Template: ComponentStory<typeof LoginWidgetV2> = (args) => <LoginWidgetV2 {...args} />;

export const Default = Template.bind({});


Default.parameters = {
  docs: {
    source: {
      code: '<LoginWidgetV2/>',
      language: "html",
      type: "auto",
    },
  },
};