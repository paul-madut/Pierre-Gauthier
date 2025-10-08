# Blog System with Tina CMS - Instructions

## Overview

Your website now has a fully functional blog system powered by Tina CMS. You can create, edit, and manage blog posts through an intuitive visual editor interface.

## Accessing the Blog

### Frontend (Public View)
- **Blog listing page**: http://localhost:3000/blog
- **Individual blog posts**: http://localhost:3000/blog/[post-slug]
- **Navigation**: Click "Blog" in the main navigation menu

### Admin Panel (Content Management)
- **Tina CMS Admin**: http://localhost:3000/admin
- Here you can create, edit, and delete blog posts visually

## Using Tina CMS

### Creating a New Blog Post

1. Navigate to http://localhost:3000/admin
2. Click on "Blog Posts" in the sidebar
3. Click the "Create New" button
4. Fill in the required fields:
   - **Title**: The post title
   - **Date**: Publication date
   - **Author**: Author name
   - **Excerpt**: Short description (shown on blog listing)
   - **Featured Image**: Upload or select an image
   - **Body**: Write your blog content using the rich text editor

5. Click "Save" to publish the post

### Editing Existing Posts

1. Go to http://localhost:3000/admin
2. Click on "Blog Posts"
3. Select the post you want to edit
4. Make your changes
5. Click "Save"

### Deleting Posts

1. Go to http://localhost:3000/admin
2. Click on "Blog Posts"
3. Select the post you want to delete
4. Click the delete button (trash icon)

## File Structure

```
veritas/
├── content/
│   └── posts/              # Blog posts stored as .mdx files
│       ├── post-1.mdx
│       └── post-2.mdx
├── public/
│   └── images/
│       └── blog/           # Blog featured images
├── app/
│   ├── blog/
│   │   ├── page.js         # Blog listing page
│   │   └── [slug]/
│   │       └── page.js     # Individual blog post page
│   └── admin/
│       └── [[...slug]]/
│           └── page.js     # Tina CMS admin interface
└── tina/
    └── config.js           # Tina CMS configuration
```

## Blog Post Schema

Each blog post includes:
- **title** (required): Main heading
- **date** (required): Publication date
- **author** (required): Author name
- **excerpt** (required): Brief description
- **featuredImage** (required): Hero image for the post
- **body**: Main content (supports rich text, markdown)

## Sample Posts

Your blog comes with 4 sample posts:
1. Modern Web Development Best Practices for 2025
2. The Complete Guide to Next.js Server Components
3. TypeScript Tips Every Advanced Developer Should Know
4. Building Scalable React Applications: Architecture Patterns

You can edit or delete these and create your own posts.

## Development

### Running the Development Server

```bash
pnpm dev
```

This starts:
- Next.js dev server at http://localhost:3000
- Tina CMS dev server at http://localhost:4001

### Building for Production

```bash
pnpm build
```

This will:
1. Build Tina CMS assets
2. Build your Next.js application

### Starting Production Server

```bash
pnpm start
```

## Tina Cloud (Optional)

For production use with collaborative editing:

1. Sign up at https://app.tina.io
2. Create a new project
3. Get your Client ID and Token
4. Update `.env.local`:
   ```
   NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id
   TINA_TOKEN=your_token
   ```

## Customization

### Styling
The blog pages use the same design system as your main website:
- Primary green color scheme (#168D30)
- Inter font family
- Consistent card styles and animations
- Fully responsive design

### Blog Post Template
To customize the blog post layout, edit:
- `/app/blog/[slug]/page.js` - Individual post page
- `/app/blog/page.js` - Blog listing page

### Tina Schema
To add/modify fields for blog posts, edit:
- `/tina/config.js`

## Troubleshooting

### Issue: Admin page not loading
- Make sure the dev server is running with `pnpm dev`
- Check that Tina CMS is initialized properly
- Clear browser cache and refresh

### Issue: Images not displaying
- Ensure images are in `/public/images/blog/`
- Check the featured image path in your blog post frontmatter
- Use paths relative to `/public` (e.g., `/images/blog/image.jpg`)

### Issue: Blog posts not appearing
- Check that `.mdx` files are in `/content/posts/`
- Verify the frontmatter includes all required fields
- Restart the dev server

## Support

For Tina CMS documentation: https://tina.io/docs
For Next.js documentation: https://nextjs.org/docs

---

**Note**: The blog system is production-ready. You can start creating content immediately through the Tina CMS admin interface at `/admin`.
