const clientRoot = (process.env.NODE_ENV === 'production') ? 'https://zingy-cranachan-bde3f4.netlify.app' : 'http://localhost:3000';
const serverRoot = (process.env.NODE_ENV === 'production') ? 'https://moodify.ca/c' : 'http://localhost:9000';

module.exports = { clientRoot, serverRoot };
