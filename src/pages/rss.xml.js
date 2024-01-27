import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const devPosts = await getCollection('programacion');
	const marketingPosts = await getCollection('marketing');
	const devItems = devPosts.map((post) => ({
		...post.data,
		link: `/desarrollo-de-software/${post.slug}/`,
	}));
	const marketingItems = marketingPosts.map((post) => ({
		...post.data,
		link: `/marketing-digital/${post.slug}/`,
	}));
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: [...devItems, ...marketingItems]
	});
}
