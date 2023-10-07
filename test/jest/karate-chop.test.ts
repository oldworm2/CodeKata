import { chop } from '@/karate-chop';

describe('Karate Chop', () => {
  it('test', () => {
    expect(-1).toBe(chop(3, []));
    expect(-1).toBe(chop(3, [1]));
    expect(0).toBe(chop(1, [1]));

    expect(0).toBe(chop(1, [1, 3, 5]));
    expect(1).toBe(chop(3, [1, 3, 5]));
    expect(2).toBe(chop(5, [1, 3, 5]));
    expect(-1).toBe(chop(0, [1, 3, 5]));
    expect(-1).toBe(chop(2, [1, 3, 5]));
    expect(-1).toBe(chop(4, [1, 3, 5]));
    expect(-1).toBe(chop(6, [1, 3, 5]));

    expect(0).toBe(chop(1, [1, 3, 5, 7]));
    expect(1).toBe(chop(3, [1, 3, 5, 7]));
    expect(2).toBe(chop(5, [1, 3, 5, 7]));
    expect(3).toBe(chop(7, [1, 3, 5, 7]));
    expect(-1).toBe(chop(0, [1, 3, 5, 7]));
    expect(-1).toBe(chop(2, [1, 3, 5, 7]));
    expect(-1).toBe(chop(4, [1, 3, 5, 7]));
    expect(-1).toBe(chop(6, [1, 3, 5, 7]));
    expect(-1).toBe(chop(8, [1, 3, 5, 7]));
  });
})