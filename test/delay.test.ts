import { describe, expect, it } from 'vitest';
import { delay } from '../src/delay';
describe('delay', () => {
  it('延时 1s', async () => {
    const startTime = Date.now();
    await delay(1000);
    const endTime = Date.now();

    // Use some tolerances because setTimeout is not always exact
    const diff = endTime - startTime;
    expect(diff).toBeGreaterThanOrEqual(1000);
    expect(diff).toBeLessThanOrEqual(1010);
  });
});
