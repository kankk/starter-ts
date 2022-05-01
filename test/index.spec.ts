import { author, type } from '../src/index';

test('author', () => {
  expect(author).toBe('mangokk');
});

test('type', () => {
  expect(type).toBe('TypeScript');
});
