export class App {
  public handle(): void {
    console.log('Initial Class');
  }

  public secondMethod(): void {
    console.log('Seconde Method');
  }
}

const app = new App();
app.handle();
