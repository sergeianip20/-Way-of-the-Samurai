import type { Meta, StoryObj } from '@storybook/react';
import {Menu} from '../component/Menu/Menu'
const meta: Meta<typeof Header> = {
  title: 'Example/Menu',
  component: Menu,
} 
export default meta;
type Story = StoryObj<typeof Header>;



export const MenuIn: Story = {
  args: {}
}
