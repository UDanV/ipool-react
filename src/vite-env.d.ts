/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_YA_KEY?: string
  readonly VITE_CONTACT_EMAIL?: string
  readonly VITE_CONTACT_API_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
