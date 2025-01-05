import { MetadataRoute } from "next";
// import { getAllPosts } from "@/lib/wordpress";
import { siteConfig } from "../../site.config";
import { getAll } from "@/utils/getProduits";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const produits = await getAll();

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.site_domain}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${siteConfig.site_domain}/produits`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.site_domain}/qui-sommes-nous`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteConfig.site_domain}/contactez-nous`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    
  ];

  const produitUrls: MetadataRoute.Sitemap = produits.children.map((post) => ({
    url: `${siteConfig.site_domain}/produits/${post.title
        .toLowerCase()
        .replace(/ /g, "-")}`,
    // lastModified: new Date(post.modified),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [...staticUrls, ...produitUrls];
}
