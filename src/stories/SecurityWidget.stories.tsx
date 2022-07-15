import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SecurityWidget } from './SecurityWidget';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/SecurityWidget',
  component: SecurityWidget,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SecurityWidget>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SecurityWidget> = (args) => <SecurityWidget {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Security Widget Label',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Security Widget Label',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Security Widget Label',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Security Widget Label',
};
