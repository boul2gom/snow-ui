import React from 'react';
import 'tailwindcss/tailwind.css';

import { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        layout: 'centered',
    },

    decorators: [
        (Story) => (
            <Story />
        )
    ],
};

export default preview;