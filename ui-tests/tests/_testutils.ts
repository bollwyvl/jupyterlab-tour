import type { IJupyterLabPageFixture } from '@jupyterlab/galata';

/** Click next a number of times for a tour. */
export async function advanceTour(
  page: IJupyterLabPageFixture,
  steps: number,
  stop?: number,
  start: number = 1
) {
  stop = stop || steps - 1;
  for (let i = start; i <= stop; i++) {
    await page.getByLabel(`Next (Step ${i} of ${steps})`, { exact: true }).click();
  }
}
