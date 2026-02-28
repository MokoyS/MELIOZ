/// <reference types="vite/client" />

declare global {
  interface ImportMetaEnv {
    readonly VITE_ADMIN_USER?: string;
    readonly VITE_ADMIN_PASS?: string;
    readonly VITE_WEB3FORMS_KEY?: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export {};
