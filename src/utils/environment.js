export class Environment {
  static IsTest() {
    return this.Is("test");
  }

  static IsProduction() {
    return this.Is("production");
  }

  static Is(env) {
    return process.env.NODE_ENV === env;
  }
}
