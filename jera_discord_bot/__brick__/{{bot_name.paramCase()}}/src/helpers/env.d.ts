declare namespace NodeJS {
  interface ProcessEnv {
    readonly BOT_TOKEN: string;
    readonly CLIENT_ID: string;
  }
}