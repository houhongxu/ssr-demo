import { Hello } from './hello'
import { Me } from './me'

export const routes = [
  {
    path: '/',
    element: <Hello></Hello>,
  },
  {
    path: '/me',
    element: <Me></Me>,
  },
]
