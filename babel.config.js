module.exports = function (api) {
  api.cache(true)

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          alias: {
            '@femsa-core': './femsa-core',
            '@presentation': './src/presentation',
            '@components': './src/components',
            '@constants': './src/constants',
            '@theme': './src/theme',
            '@src': './src',
            '@utils': './src/utils',
            '@mocks': ['./src/__mocks__'],
          },
        },
      ],
    ],
  }
}
