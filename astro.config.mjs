import { defineConfig, squooshImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import { SITE_METADATA } from "./src/consts.ts";
import metaTags from "astro-meta-tags";
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://scul0405.github.io',
  image: {
    service: squooshImageService()
  },
  prefetch: true,
  site: SITE_METADATA.siteUrl,
  integrations: [mdx({
    remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex]
  }), sitemap(), tailwind(), solidJs(), metaTags(), robotsTxt()]
});