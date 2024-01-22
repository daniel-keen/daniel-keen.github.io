import type { Product } from "./ProductType";

export const generateProduct = (
    id: string,
    title: string,
    basePath: string,
    iosLink: string,
    androidLink: string
  ): Product => ({
    id,
    title,
    shortDescription: `${basePath}/short-description.txt`,
    longDescription: `${basePath}/long-description.txt`,
    privacyPolicy: `${basePath}/privacy-policy.txt`,
    thumbnail: `${basePath}/icon.png`,
    iosLink,
    androidLink,
    screenshots: [
      `${basePath}/screenshot-1.png`,
      `${basePath}/screenshot-2.png`,
      `${basePath}/screenshot-3.png`,
    ],
  });