import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@davicecilio-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://avatars.githubusercontent.com/u/53492145',
    alt: 'Diego Fernandes',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
