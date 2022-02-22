import * as React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { Example } from './pages/Example';
import { Home } from './pages/Home';

const Header = () => (
  <div>
    Header
    <Outlet />
  </div>
);
const NoMatch = () => <div>NoMatch</div>;

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="example" element={<Example />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};
