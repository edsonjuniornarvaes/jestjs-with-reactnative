module.exports = {
  preset: 'react-native',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'], // Padrões de teste que o Jest irá procurar
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'], // Ignora a pasta node_modules durante a observação
};
