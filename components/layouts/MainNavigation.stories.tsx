import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainNavigation, { IMainNavigation } from './MainNavigation';
import { mockMainNavigationProps } from './MainNavigation.mocks';

export default {
  title: 'layouts/MainNavigation',
  component: MainNavigation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MainNavigation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MainNavigation> = (args) => (
  <MainNavigation {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMainNavigationProps.base,
} as IMainNavigation;
