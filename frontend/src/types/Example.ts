export type Example = {
  id: string;
  name: string;
};

export type ExampleDefinition = Omit<Example, 'id'>;
