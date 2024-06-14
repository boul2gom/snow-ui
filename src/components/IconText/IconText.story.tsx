import { Meta, StoryObj } from '@storybook/react';
import { IconText } from './IconText';
import { IconAccessPoint } from '@tabler/icons-react';

const meta: Meta<typeof IconText> = {
  title: 'Components/Icon Text',
  component: IconText,
};
export default meta;

type Story = StoryObj<typeof IconText>;

export const Component: Story = {
  args: {
    icon: <IconAccessPoint width={20} height={20} />,
    children: 'Text'
  },
};