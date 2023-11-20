import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'tutorial_project',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
