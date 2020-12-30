module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          esmodules: true,
        },
      },
    ],
    '@babel/react',
  ],
};
