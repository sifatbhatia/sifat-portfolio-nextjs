import { MetadataRoute } from "next";

<<<<<<< HEAD
export const dynamic = "force-static";

=======
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://sifat.tech/sitemap.xml",
  };
}
