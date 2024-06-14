import { Meta, StoryObj } from '@storybook/react';
import StatusBadge from './StatusBadge';

const meta: Meta<typeof StatusBadge> = {
  title: 'Components/Status Badge',
  component: StatusBadge,

  argTypes: {
    status: {
        control: {
            type: 'select',
            options: ['in progress', 'complete', 'pending', 'approved', 'rejected'],
        },
    },

    background: {
        control: {
            type: 'boolean',
        },
    },
  },

  args: {
    status: 'in progress',
    background: false,
  },
};
export default meta;

type Story = StoryObj<typeof StatusBadge>;

export const Component: Story = {};