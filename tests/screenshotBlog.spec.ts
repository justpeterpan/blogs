import { test } from '@playwright/test'
import data from '~/data.js'
import useNormalizeImageName from '~/composables/useNormalizeImageName.js'

test.use({
  viewport: { width: 720, height: 405 },
})

for (const blog of data) {
  test(`Blog ${blog.name}`, async ({ page }) => {
    await page.goto(blog.url)
    await page.screenshot({
      path: `./public/img/${useNormalizeImageName(blog.name)}.png`,
    })
  })
}
