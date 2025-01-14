/* @refresh reload */
import { render } from 'solid-js/web'
import App from './App.tsx'
import './index.css'

const root = document.getElementById('root') as HTMLElement;

if (!root) {
  throw new Error("Root element not found");
}

render(() => <App />, root);
