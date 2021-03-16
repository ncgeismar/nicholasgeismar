const app = require('./server/server.js');
const {db} = require('./server/database');

const port = process.env.PORT || 3000;

db.sync()
  .then(function(){
    app.listen(port, () => console.log('port is up and running'))
  })
