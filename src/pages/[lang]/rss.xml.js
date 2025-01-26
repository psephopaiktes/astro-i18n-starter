import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_DESCRIPTION, SITE_TITLE } from '@/consts';
import { localeParams } from "@/i18n";

export const getStaticPaths = () => localeParams;

export async function GET(context) {

	const locale = context.params.lang;

	const localeTitle = typeof SITE_TITLE === "string"
		? SITE_TITLE
		: SITE_TITLE[locale];
	const localeDescription = typeof SITE_DESCRIPTION === "string"
		? SITE_DESCRIPTION
		: SITE_DESCRIPTION[locale];

	const posts = await getCollection('blog', ({ id }) => {
		return id.split("/")[0] === locale;
	});
	posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

	return rss({
		title: localeTitle,
		description: localeDescription,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.date,
			description: post.data.description,
			link: `/${locale}/blog/${post.id.split("/")[1]}/`,
		})),
	});
}
