import { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Number: Story = {
    args: {
        type: "number",
        children: "12"
    },
};

export const Dot: Story = {
    args: {
        type: "dot",
    },
};