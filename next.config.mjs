// next.config.js

const nextConfig = {
    webpack: (config, { isServer }) => {
      // Add a rule for handling .mp4 files
      config.module.rules.push({
        test: /\.mp4$/,
        use: {
          loader: 'file-loader', // You can also use 'url-loader' if you prefer
          options: {
            publicPath: '/_next/public/videos', // Customize the path where videos will be served
            outputPath: 'public/videos', // Output path for the bundled videos
            name: '[name].[hash].[ext]', // Rename the bundled video files
          },
        },
      });
  
      // Important: Return the modified config
      return config;
    },
  };
  
  export default nextConfig;
  