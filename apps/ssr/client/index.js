import { hydrateRoot } from 'react-dom/client'
import { App } from './App'
import { routes } from './routes'

hydrateRoot(document.getElementById('root'), <App></App>)
