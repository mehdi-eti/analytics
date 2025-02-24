type AuthMethod = 'jwt' | 'amplify' | 'firebase' | 'supabase' | 'auth0';

interface AuthConfig {
  method: AuthMethod; // Authentication method
  skip: boolean; // Skip authentication
  redirectPath: string; // Redirect path after authentication
}

interface FirebaseConfig {
  apiKey: string; // Firebase API key
  authDomain: string; // Firebase Auth Domain
  projectId: string; // Firebase Project ID
  storageBucket: string; // Firebase Storage Bucket
  messagingSenderId: string; // Firebase Messaging Sender ID
  appId: string; // Firebase App ID
  measurementId: string; // Firebase Measurement ID
}

interface AmplifyConfig {
  userPoolId: string; // AWS Amplify User Pool ID
  userPoolWebClientId: string; // AWS Amplify User Pool Web Client ID
  region: string; // AWS Amplify Region
}

interface Auth0Config {
  clientId: string; // Auth0 Client ID
  domain: string; // Auth0 Domain
  callbackUrl: string; // Auth0 Callback URL
}

interface SupabaseConfig {
  url: string; // Supabase URL
  key: string; // Supabase Key
}

export default interface AppConfig {
  appName: string; // Application name
  basePath?: string;
  appVersion: string; // Application version from package.json
  cors: {
    origins: string[];
    methods: string[];
  };
  serverUrl: string; // Server URL from environment variables
  assetsDir: string; // Assets directory from environment variables
  isStaticExport: boolean; // Static export option (next.config.mjs)
  auth: AuthConfig; // Authentication configuration
  mapboxApiKey: string; // Mapbox API key from environment variables
  firebase: FirebaseConfig; // Firebase configuration
  amplify: AmplifyConfig; // AWS Amplify configuration
  auth0: Auth0Config; // Auth0 configuration
  supabase: SupabaseConfig; // Supabase configuration
}