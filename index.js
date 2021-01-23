const notifier = require('node-notifier');
const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render("index");
});

app.post('/done', (req, res) => {
  res.render('done');
  const title = req.body.title;
  const message = req.body.message;
  const mins = req.body.mins;
  setTimeout(() => {
    notifier.notify({
      title,
      message,
      icon: path.join(__dirname, 'icons/favicon.ico'),
      'appID': "Notifier"
    });
  }, mins*60000);
});

app.listen(3000, () => {
  console.log('Notifier is working...');
});