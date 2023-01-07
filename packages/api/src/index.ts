import App from './app';

const port = process.env.API_PORT;

const mainServer = new App();

mainServer.app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
