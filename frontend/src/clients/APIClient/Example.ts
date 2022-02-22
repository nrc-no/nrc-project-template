import { BaseRESTClient, SuccessResponse } from 'core-api-client';

import { ExampleClientDefinition } from '../../types/Client';
import { Example, ExampleDefinition } from '../../types/Example';

export class ExampleClient implements ExampleClientDefinition {
  restClient: BaseRESTClient;

  constructor(restClient: BaseRESTClient) {
    this.restClient = restClient;
  }

  get = async (id: string): Promise<Example> => {
    const response = await this.restClient.get<Example>(`/example/${id}`);
    if (response.success)
      return (response as SuccessResponse<undefined, Example>).response;
    throw new Error();
  };

  list = async (): Promise<Example[]> => {
    const response = await this.restClient.get<Example[]>('/example');
    if (response.success)
      return (response as SuccessResponse<undefined, Example[]>).response;
    throw new Error();
  };

  create = async (example: ExampleDefinition): Promise<Example> => {
    const response = await this.restClient.post<ExampleDefinition, Example>(
      '/example',
      example,
    );
    if (response.success)
      return (response as SuccessResponse<ExampleDefinition, Example>).response;
    throw new Error();
  };

  update = async (example: Example): Promise<Example> => {
    const response = await this.restClient.put<Example, Example>(
      `/example/${example.id}`,
      example,
    );
    if (response.success)
      return (response as SuccessResponse<Example, Example>).response;
    throw new Error();
  };

  delete = async (id: string): Promise<void> => {
    const response = await this.restClient.delete(`/example/${id}`);
    if (response.success)
      return (response as SuccessResponse<undefined, undefined>).response;
    throw new Error();
  };
}
