import AppConfig from 'src/types/app';

// routes
import { paths } from 'src/routes/paths';
import packageJson from '../package.json';

// API
// ----------------------------------------------------------------------

export const HOST_API = process.env.NEXT_PUBLIC_HOST_API;
export const ASSETS_API = process.env.NEXT_PUBLIC_ASSETS_API;
export const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET || "db39c22f5f04cf6b877e7a03aafc5e4cf25d8412499b1bdf99437f85769c8f68"
export const JWT_EXPIRES_IN = process.env.NEXT_PUBLIC_JWT_EXPIRES_IN || "2 days"

export const FIREBASE_API = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const EMAIL = {
  host: process.env.NEXT_PUBLIC_EMAIL_HOST,
  port: process.env.NEXT_PUBLIC_EMAIL_PORT,
  username: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
  password: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
};

export const GHASEDAK_SMS_KEY = process.env.NEXT_PUBLIC_GHASEDAK_SMS_KEY;

export const AMPLIFY_API = {
  userPoolId: process.env.NEXT_PUBLIC_AWS_AMPLIFY_USER_POOL_ID,
  userPoolWebClientId: process.env.NEXT_PUBLIC_AWS_AMPLIFY_USER_POOL_WEB_CLIENT_ID,
  region: process.env.NEXT_PUBLIC_AWS_AMPLIFY_REGION,
};

export const AUTH0_API = {
  clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
  callbackUrl: process.env.NEXT_PUBLIC_AUTH0_CALLBACK_URL,
};

export const MAPBOX_API = process.env.NEXT_PUBLIC_MAPBOX_API;

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = paths.dashboard.root; // as '/dashboard'

// ----------------------------------------------------------------------

export const CONFIG: AppConfig = {
  appName: 'Sizin Analytics',
  appVersion: packageJson.version,
  basePath:
    process.env.NODE_ENV === 'production' ? process.env.PRODUCTION_API : process.env.DEV_API,
  cors: {
    /**
     * [] = allow all origins
     * ['http://localhost:8081', 'http://localhost:8082'] = allow only these origins
     */
    origins: [],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  },
  serverUrl: process.env.NEXT_PUBLIC_SERVER_URL ?? '', // Server URL from environment variables
  assetsDir: process.env.NEXT_PUBLIC_ASSETS_DIR ?? '', // Assets directory from environment variables
  isStaticExport: false, // Static export option (next.config.mjs)
  /**
   * Auth
   * @method jwt | amplify | firebase | supabase | auth0
   */
  auth: {
    method: 'jwt', // Authentication method
    skip: false, // Skip authentication
    redirectPath: paths.dashboard.root, // Redirect path after authentication
  },
  /**
   * Mapbox
   */
  mapboxApiKey: process.env.NEXT_PUBLIC_MAPBOX_API_KEY ?? '', // Mapbox API key from environment variables
  /**
   * Firebase
   */
  firebase: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? '', // Firebase API key from environment variables
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? '', // Firebase Auth Domain from environment variables
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? '', // Firebase Project ID from environment variables
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? '', // Firebase Storage Bucket from environment variables
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? '', // Firebase Messaging Sender ID from environment variables
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID ?? '', // Firebase App ID from environment variables
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? '', // Firebase Measurement ID from environment variables
  },
  /**
   * Amplify
   */
  amplify: {
    userPoolId: process.env.NEXT_PUBLIC_AWS_AMPLIFY_USER_POOL_ID ?? '', // AWS Amplify User Pool ID from environment variables
    userPoolWebClientId: process.env.NEXT_PUBLIC_AWS_AMPLIFY_USER_POOL_WEB_CLIENT_ID ?? '', // AWS Amplify User Pool Web Client ID from environment variables
    region: process.env.NEXT_PUBLIC_AWS_AMPLIFY_REGION ?? '', // AWS Amplify Region from environment variables
  },
  /**
   * Auth0
   */
  auth0: {
    clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID ?? '', // Auth0 Client ID from environment variables
    domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN ?? '', // Auth0 Domain from environment variables
    callbackUrl: process.env.NEXT_PUBLIC_AUTH0_CALLBACK_URL ?? '', // Auth0 Callback URL from environment variables
  },
  /**
   * Supabase
   */
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '', // Supabase URL from environment variables
    key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '', // Supabase Key from environment variables
  },
};
