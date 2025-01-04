import type { IGraphQLConfig } from 'graphql-config';

const config: IGraphQLConfig = {
  schema: 'https://api.tarkov.dev/graphql',
  documents: ['./**/*.ts'],
  schemaPath: './schema.graphql',
};

export default config;
