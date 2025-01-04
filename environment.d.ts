declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TARKOV_DEV_API_URL: string;
    }
  }
}

export {};
