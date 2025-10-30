// src/setupTests.js
import jasmineDom from '@testing-library/jasmine-dom';
import { cleanup } from '@testing-library/react';

beforeAll(() => {
  // Registra todos los matchers: toBeInTheDocument, toHaveTextContent, etc.
  jasmine.addMatchers(jasmineDom);
});

afterEach(() => {
  cleanup();
});
