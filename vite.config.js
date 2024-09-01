import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'your-github-username/your-repo-name' with your actual GitHub username and repository name
export default defineConfig({
  base: '/NasaApiApplication/',
  plugins: [react()],
});