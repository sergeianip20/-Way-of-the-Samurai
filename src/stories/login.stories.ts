import type { Meta, StoryObj } from '@storybook/react';
import {Login} from '../component/Login/Login'
import {ReduxStoreProviderDecorator} from './ReduxStoreProviderDecorator'
const meta: Meta<typeof Login> = {
  title: 'Example/Login',
  component: Login,
  decorators: [ReduxStoreProviderDecorator]
} 
export default meta;
type Story = StoryObj<typeof Login>;



export const LoginIn: Story = {
  args: {}
}
