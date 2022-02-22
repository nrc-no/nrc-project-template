import { createEntityAdapter } from '@reduxjs/toolkit';

import { Example } from '../../types/Example';

export const adapter = createEntityAdapter<Example>({
  selectId: (e) => e.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});
