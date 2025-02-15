const fetch = require('node-fetch');

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: BASE_URL,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin/**', '/secret'],
  additionalPaths: async (config) => {
    try {
      // دریافت داده‌های دینامیک از API
      const blogsResponse = await fetch(
        `${BASE_URL}/api/blogs?page=1&limit=100`
      );
      const projectsResponse = await fetch(
        `${BASE_URL}/api/projects?limit=100`
      );

      if (!blogsResponse.ok) {
        throw new Error(`Failed to fetch blogs: ${blogsResponse.statusText}`);
      }
      if (!projectsResponse.ok) {
        throw new Error(
          `Failed to fetch projects: ${projectsResponse.statusText}`
        );
      }

      const blogs = await blogsResponse.json();
      const projects = await projectsResponse.json();

      if (!Array.isArray(blogs.blogs)) {
        throw new Error('Invalid response format for blogs');
      }
      if (!Array.isArray(projects)) {
        throw new Error('Invalid response format for projects');
      }

      const dynamicPaths = [
        ...blogs.blogs.map((blog) => ({
          loc: `${BASE_URL}/blog/${blog.slug}/${blog.id}`,
          changefreq: 'daily',
          priority: 0.8,
        })),
        ...projects.map((project) => ({
          loc: `${BASE_URL}/project/${project.id}`,
          changefreq: 'weekly',
          priority: 0.7,
        })),
      ];

      return dynamicPaths;
    } catch (error) {
      return [];
    }
  },
  robotsTxtOptions: {
    policies: [{userAgent: '*', allow: '/'}],
  },
};

module.exports = config;
