
# Easy to use modern captcha

An Easy to use captcha for your website. Modern solution for bot problem. There are many people to use captcha for bot problem. I found out it somewhere and taken inspiration from it.




## Installation

To use this captcha run

```bash
  npm i captcha-at-ease
```
    
## How to use

After installation, go to file where you want to deploy it

```bash
  const { useCaptcha } = require('captcha-at-ease');

  const { html, css, js } = useCaptcha();
```

Sample index.js File

First install dependencies

```bash
  npm i express
  npm i captcha-at-ease
```

Install dependencies

```bash
  // index.js
const express = require('express');
const path = require('path');
const { useCaptcha } = require('captcha-at-ease');

const app = express();
const { html, css, js } = useCaptcha();

app.get('/', (req, res) => {
    res.sendFile(html);
});

app.get('/style.css', (req, res) => {
    res.sendFile(css);
});

app.get('/script.js', (req, res) => {
    res.sendFile(js);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

```

Start the server

```bash
  node filename.js
```


## Authors

- [@ayush2202ksr](https://github.com/ayush12993)


## Demo

[see here](https://www.youtube.com/shorts/UHB9QFJWIAQ)

