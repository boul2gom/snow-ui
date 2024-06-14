import { Meta, StoryObj } from '@storybook/react';
import TextStrip from './TextStrip';

const meta: Meta<typeof TextStrip> = {
  title: 'Components/Text Strip',
  component: TextStrip,

  argTypes: {
    strip: {
        control: {
            type: 'boolean',
        },
    },
  },

  args: {
    strip: true,
  },
};
export default meta;

type Story = StoryObj<typeof TextStrip>;

export const Component: Story = {
  args: {
    children: 'Text'
  },
};