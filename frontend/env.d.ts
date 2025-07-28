

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL:'http://localhost:5000';
  // add other VITE_ env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
