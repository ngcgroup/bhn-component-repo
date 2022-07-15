import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SecurityWidget from "./SecurityWidget";

export default {
  title: "BHN/SecurityWidget",
  component: SecurityWidget,
} as ComponentMeta<typeof SecurityWidget>;

const Template: ComponentStory<typeof SecurityWidget> = (args) => <SecurityWidget {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: "primary",
  children: "I'm a Security Widget 😎"
};
