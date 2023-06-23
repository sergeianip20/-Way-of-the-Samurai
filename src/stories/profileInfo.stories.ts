import type { Meta, StoryObj } from '@storybook/react';
import {ProfileInfo} from '../component/profile/ProfileInfo'
const meta: Meta<typeof ProfileInfo> = {
  title: 'Example/ProfileInfo',
  component: ProfileInfo,
} 
export default meta;
type Story = StoryObj<typeof ProfileInfo>;



export const ProfileInfoIn: Story = {
  args: {
   label: 'github',
    value:'https://github.com/sergeianip20/'
    
  }
}
