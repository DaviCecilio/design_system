import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

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
} as Meta

export const Primary: StoryObj<BoxProps> = {}
