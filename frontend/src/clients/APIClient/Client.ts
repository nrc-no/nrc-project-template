import { BaseRESTClient } from 'core-api-client';

import { ClientDefinition } from '../../types/Client';

import { ExampleClient } from './Example';

export class APIClient extends BaseRESTClient implements ClientDefinition {
  static v1 = 'apis/template.nrc.no/v1';

  public Example: ExampleClient;

  constructor(address: string) {
    super(`${address}/${APIClient.v1}`);
    this.Example = new ExampleClient(this);
  }
}
