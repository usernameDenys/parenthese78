import type { MetadataRoute } from "next";

const BASE_URL = "https://www.parenthese78.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, priority: 1, changeFrequency: "monthly" },
    { url: `${BASE_URL}/parentheses`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/services`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/formules`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/rdv`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/about`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/contact`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/offrir`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/quel-accompagnement`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/mentions-legales`, priority: 0.1, changeFrequency: "yearly" },
    { url: `${BASE_URL}/cgv`, priority: 0.1, changeFrequency: "yearly" },
    { url: `${BASE_URL}/politique-confidentialite`, priority: 0.1, changeFrequency: "yearly" },
  ];
}
