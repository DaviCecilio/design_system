import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@davicecilio-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <Text as="strong">Test the box element</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta

export const Primary: StoryObj<BoxProps> = {}
