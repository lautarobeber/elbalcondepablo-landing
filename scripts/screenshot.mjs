import { chromium } from 'playwright'

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'laptop', width: 1280, height: 800 },
  { name: 'mobile', width: 390, height: 844 },
]

const browser = await chromium.launch()
const errors = []

for (const vp of viewports) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } })
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(`[${vp.name}] ${msg.text()}`)
  })
  page.on('pageerror', (err) => errors.push(`[${vp.name}] pageerror: ${err.message}`))

  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' })
  await page.waitForTimeout(800)
  await page.screenshot({ path: `screenshots/${vp.name}-full.png`, fullPage: true })

  const hero = page.locator('#top')
  await hero.screenshot({ path: `screenshots/${vp.name}-hero.png` })

  await page.close()
}

await browser.close()

if (errors.length) {
  console.log('CONSOLE ERRORS:\n' + errors.join('\n'))
} else {
  console.log('No console errors.')
}
