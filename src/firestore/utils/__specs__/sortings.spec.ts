import { querySortFunction } from '../sortings';
describe('Simple field sorting', () => {
  describe('Number fields', () => {
    it('will sort number fields in ascending order with default direction', () => {
      const data = [
        {
          data: { a: 3 },
        },
        {
          data: { a: 2 },
        },
        {
          data: { a: 1 },
        },
      ];
      const fun = querySortFunction('a');
      const result = data.sort(fun);
      expect(result[0].data.a).toBe(1);
    });
    it('will sort number fields in ascending order when direction is explicitly set', () => {
      const data = [
        {
          data: { a: 3 },
        },
        {
          data: { a: 2 },
        },
        {
          data: { a: 1 },
        },
      ];
      const fun = querySortFunction('a', 'asc');
      const result = data.sort(fun);
      expect(result[0].data.a).toBe(1);
    });
    it('will sort number fields in descending order when direction is explicitly set', () => {
      const data = [
        {
          data: { a: 1 },
        },
        {
          data: { a: 2 },
        },
        {
          data: { a: 3 },
        },
      ];
      const fun = querySortFunction('a', 'desc');
      const result = data.sort(fun);
      expect(result[0].data.a).toBe(3);
    });
  });

  describe('String fields', () => {
    it('will sort string fields in ascending order with default direction', () => {
      const data = [{ data: { a: 'Horse' } }, { data: { a: 'Dog' } }, { data: { a: 'Cat' } }];
      const fun = querySortFunction('a');
      const result = data.sort(fun);
      expect(result[0].data.a).toBe('Cat');
    });
    it('will sort string fields in ascending order when direction is explicitly set', () => {
      const data = [{ data: { a: 'Horse' } }, { data: { a: 'Dog' } }, { data: { a: 'Cat' } }];
      const fun = querySortFunction('a', 'asc');
      const result = data.sort(fun);
      expect(result[0].data.a).toBe('Cat');
    });
    it('will sort string fields in descending order when direction is explicitly set', () => {
      const data = [{ data: { a: 'Cat' } }, { data: { a: 'Dog' } }, { data: { a: 'Horse' } }];
      const fun = querySortFunction('a', 'desc');
      const result = data.sort(fun);
      expect(result[0].data.a).toBe('Horse');
    });
  });
});