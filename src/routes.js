const routes = (app, state) => {
  app.get('/login', (request, response) => {
    const { username, password } = request.body;
    const user = state.users.find((u) => u.username === username);
    
  });
}