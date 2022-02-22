import * as React from 'react';
import { Box, Button, HStack, Text, VStack } from 'native-base';

import { ExampleDetail } from '../../components/Example/ExampleDetail';
import { ExampleList } from '../../components/Example/ExampleList';

type Props = {
  onAddClick: () => void;
};

export const ExampleComponent: React.FC<Props> = ({ onAddClick }) => {
  return (
    <Box>
      <VStack>
        <HStack>
          <Text>Example</Text>
          <Button colorScheme="primary" variant="major" onPress={onAddClick}>
            Add
          </Button>
        </HStack>
        <HStack>
          <ExampleList />
          <ExampleDetail />
        </HStack>
      </VStack>
    </Box>
  );
};
