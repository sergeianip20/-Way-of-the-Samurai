import type { Meta, StoryObj } from '@storybook/react';
import {Menu} from '../component/Menu/Menu'
const meta: Meta<typeof Menu> = {
  title: 'Example/Menu',
  component: Menu,
} 
export default meta;
type Story = StoryObj<typeof Menu>;



export const MenuIn: Story = {
  args: {}
}
