import './style.scss';
import App from './app';

const todo: App = new App();

document.addEventListener('DOMContentLoaded', () => {
    todo.startApp();
})
