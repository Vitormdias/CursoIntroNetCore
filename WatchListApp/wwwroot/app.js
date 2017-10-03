export class App {
    constructor()
    {
    }

    configureRouter(config, router){
      config.title = 'TestApp';

      config.map([
          { route: ['','home'],  name: 'home', moduleId: './home',  nav: true, title:'Home' },
          { route: 'users',  name: 'users', moduleId: './users',    nav: true, title:'Users' }
      ]);

      this.router = router;
    }
}