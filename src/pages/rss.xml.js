import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import * as content from "@content/pages/content.md";
const { title, subtitle, description } = content.frontmatter;

export async function GET(context) {
	const devPosts = await getCollection('programacion');
	const marketingPosts = await getCollection('marketing');
	const lifestylePosts = await getCollection('vida');
	const devItems = devPosts.map((post) => ({
		...post.data,
		link: `/desarrollo-de-software/${post.slug}/`,
	}));
	const marketingItems = marketingPosts.map((post) => ({
		...post.data,
		link: `/marketing-digital/${post.slug}/`,
	}));
	const lifestyleItems = lifestylePosts.map((post) => ({
		...post.data,
		link: `/estilo-de-vida/${post.slug}/`,
	}));
	return rss({
		title: `${title}: ${subtitle}`,
		description,
		site: context.site,
		items: [...devItems, ...marketingItems, ...lifestyleItems]
	});
}
