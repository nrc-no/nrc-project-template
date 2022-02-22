import { Box, Link, VStack } from 'native-base';
import * as React from 'react';

export const HomeComponent: React.FC = () => {
  return (
    <Box>
      <VStack space={5} alignItems="center">
        <Link href="/example">Example</Link>
        <Link href="https://docs.nativebase.io" isExternal>
          Technical guidelines
        </Link>
        <Link href="https://nrc-no.github.io/core" isExternal>
          NRC Design system
        </Link>
      </VStack>
    </Box>
  );
};
