import { KarateChop } from '@/karate-chop';

describe('Karate Chop', () => {
  it('test', () => {
    expect(-1).toBe(KarateChop.chop(3, []));
    expect(-1).toBe(KarateChop.chop(3, [1]));
    expect(0).toBe(KarateChop.chop(1, [1]));

    expect(0).toBe(KarateChop.chop(1, [1, 3, 5]));
    expect(1).toBe(KarateChop.chop(3, [1, 3, 5]));
    expect(2).toBe(KarateChop.chop(5, [1, 3, 5]));
    expect(-1).toBe(KarateChop.chop(0, [1, 3, 5]));
    expect(-1).toBe(KarateChop.chop(2, [1, 3, 5]));
    expect(-1).toBe(KarateChop.chop(4, [1, 3, 5]));
    expect(-1).toBe(KarateChop.chop(6, [1, 3, 5]));

    expect(0).toBe(KarateChop.chop(1, [1, 3, 5, 7]));
    expect(1).toBe(KarateChop.chop(3, [1, 3, 5, 7]));
    expect(2).toBe(KarateChop.chop(5, [1, 3, 5, 7]));
    expect(3).toBe(KarateChop.chop(7, [1, 3, 5, 7]));
    expect(-1).toBe(KarateChop.chop(0, [1, 3, 5, 7]));
    expect(-1).toBe(KarateChop.chop(2, [1, 3, 5, 7]));
    expect(-1).toBe(KarateChop.chop(4, [1, 3, 5, 7]));
    expect(-1).toBe(KarateChop.chop(6, [1, 3, 5, 7]));
    expect(-1).toBe(KarateChop.chop(8, [1, 3, 5, 7]));
  });
})