import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/bandar-estates-bn', // Replace 'bandar-estates-bn' with your repository name
  assetPrefix: '/bandar-estates-bn/', // Replace 'bandar-estates-bn' with your repository name
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: 'https://github.com/Naaadyy/bandar-estates-bn/tree/main/public/videos', // Update the public path
          outputPath: 'static/videos/',
          name: '[name].[hash].[ext]',
          esModule: false,
        },
      },
    });

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

export default nextConfig;
