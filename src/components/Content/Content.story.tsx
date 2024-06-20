import { IconClover } from '@tabler/icons-react';
import { Meta, StoryObj } from '@storybook/react';
import Content from "./Content";

const meta: Meta<typeof Content> = {
    title: 'Components/Content',
    component: Content,
};
export default meta;

type Story = StoryObj<typeof Content>;

export const Component: Story = {
    args: {
        left: <IconClover stroke={1.25} size={20} />,
        children: 'Button',
        right: <IconClover stroke={1.25} size={20} />,
    },
};

export const Icon: Story = {
    args: {
        children: <IconClover stroke={1.25} size={20} />,
    },
};