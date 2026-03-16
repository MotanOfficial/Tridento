import type { NextConfig } from "next";

/**
 * Configurație Next.js pentru export static (GitHub Pages)
 * 
 * PENTRU DEPLOY PE GITHUB PAGES:
 * 1. Dacă repository-ul NU este la root (ex: username.github.io),
 *    trebuie să setezi basePath și assetPrefix cu numele repository-ului.
 * 
 * Exemplu pentru repository "tridento":
 *   basePath: '/tridento',
 *   assetPrefix: '/tridento/',
 * 
 * 2. Pentru repository la root (username.github.io), lasă basePath și assetPrefix goale.
 */

const nextConfig: NextConfig = {
  // Export static - necesar pentru GitHub Pages
  output: 'export',
  
  // Pentru GitHub Pages pe repository-ul "Tridento"
  basePath: '/Tridento',
  assetPrefix: '/Tridento/',
  
  // Dezactivează imagini optimizate (necesită server pentru optimizare)
  images: {
    unoptimized: true,
  },
  
  // Trailng slash pentru GitHub Pages
  trailingSlash: true,
  
  // TypeScript strict mode
  typescript: {
    ignoreBuildErrors: false,
  },
  
  reactStrictMode: true,

  // Ascunde indicatorul Next.js DevTools ("N" din colț) în development
  devIndicators: false,
};

export default nextConfig;
