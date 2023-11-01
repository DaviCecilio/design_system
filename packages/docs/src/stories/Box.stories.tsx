import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <span>Test the box element</span>
      </>
    ),
  },
} as Meta

export const Primary: StoryObj<BoxProps> = {}
