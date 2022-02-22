import { Example } from './Example';

export interface ExampleClientDefinition {
  get: (id: string) => Promise<Example>;
  list: () => Promise<Example[]>;
  create: (example: Example) => Promise<Example>;
  update: (example: Example) => Promise<Example>;
  delete: (id: string) => Promise<void>;
}

export interface ClientDefinition {
  Example: ExampleClientDefinition;
}
