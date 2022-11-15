const server = require('./server')
const PORT = process.env.PORT || 3000;
const serverSetup = server();

(()=> {
    serverSetup.listen(PORT, () => console.log(`app listening on port ${PORT}!`));
})();