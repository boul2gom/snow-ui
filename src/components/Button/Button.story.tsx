import { IconClover } from '@tabler/icons-react';
import Button from './Button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,

  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    style: {
      control: {
        type: 'select',
        options: ['borderless', 'gray', 'outline', 'filled'],
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },

  args: {
    size: 'medium',
    style: 'outline',
    disabled: false,
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Component: Story = {
    args: {
        left: <IconClover stroke={1.25} size={20} />,
        children: 'Button',
        withArrow: true,
    },
};

export const Icon: Story = {
    args: {
        children: <IconClover stroke={1.25} size={20} />,
    },
};