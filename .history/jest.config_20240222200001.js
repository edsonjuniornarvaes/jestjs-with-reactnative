module.exports = {
  preset: 'react-native',
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.js',
    '**/__tests__/**/*.ts',
    '**/?(*.)+(spec|test).js',
    '**/?(*.)+(spec|test).ts',
  ], // Padrões de teste que o Jest irá procurar
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
