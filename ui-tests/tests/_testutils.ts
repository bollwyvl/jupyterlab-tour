import type { IJupyterLabPageFixture } from '@jupyterlab/galata';

/** Click next a number of times for a tour. */
export async function advanceTour(
  page: IJupyterLabPageFixture,
  steps: number,
  start: number = 1
) {
  for (let i = start; i < steps + 1; i++) {
    await page.getByLabel(`Next (Step ${i} of 8)`, { exact: true }).click();
  }
}
