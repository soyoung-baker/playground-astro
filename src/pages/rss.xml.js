import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function GET(context) {
  return rss({
    title: 'Astro Blog 튜토리얼',
    description: 'Astro 블로그 튜토리얼 보면서 따라 만들기',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  })
}
