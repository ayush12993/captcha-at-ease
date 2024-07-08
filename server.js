// index.js
const path = require('path');

const useCaptcha = () => {
    return {
        html: path.join(__dirname, 'public', 'index.html'),
        css: path.join(__dirname, 'public', 'styles.css'),
        js: path.join(__dirname, 'public', 'script.js')
    };
};

module.exports = { useCaptcha };
