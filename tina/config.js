import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch:"main",

  // Use local mode if no cloud credentials are provided
  clientId: "ce64ad75-f84a-4361-aede-13bf1fa2af9a",
  token: "eec05ac4a9a16086e0b078bc7d226979bbba4800",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images/blog",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "content/posts",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Featured Image",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "testimonial",
        label: "Testimonials",
        path: "content/testimonials",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Customer Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "location",
            label: "Location",
            required: true,
          },
          {
            type: "string",
            name: "quote",
            label: "Quote",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "metric",
            label: "Key Metric/Result",
            required: true,
            description: "The specific result or metric achieved (e.g., 'Reduced heating costs by 28%')",
          },
          {
            type: "number",
            name: "rating",
            label: "Rating (1-5)",
            required: true,
            ui: {
              validate: (value) => {
                if (value < 1 || value > 5) {
                  return "Rating must be between 1 and 5";
                }
              },
            },
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
            required: true,
            description: "Lower numbers appear first (e.g., 1, 2, 3...)",
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured",
            description: "Show this testimonial prominently",
          },
        ],
      },
    ],
  },
});