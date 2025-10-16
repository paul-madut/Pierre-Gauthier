# Managing Testimonials with Tina CMS

This directory contains all customer testimonials for the Veritas Insulation website.

## How to Manage Testimonials

### Accessing Tina CMS

1. Start your development server: `npm run dev` or `pnpm dev`
2. Navigate to `/admin` in your browser (e.g., `http://localhost:3000/admin`)
3. Click on "Testimonials" in the left sidebar

### Adding a New Testimonial

1. In Tina CMS, click "Testimonials" → "Create New"
2. Fill in the required fields:
   - **Customer Name**: The name of the customer (e.g., "Sara M." or "Jennifer & David L.")
   - **Location**: Customer's city/area (e.g., "Kingston", "Ottawa")
   - **Quote**: The customer's testimonial text
   - **Key Metric/Result**: Specific result achieved (e.g., "Reduced heating costs by 28%")
   - **Rating**: 1-5 stars (usually 5)
   - **Display Order**: Lower numbers appear first (1, 2, 3, etc.)
   - **Featured**: Optional checkbox for prominent display
3. Click "Save"

### Editing a Testimonial

1. In Tina CMS, click "Testimonials"
2. Select the testimonial you want to edit
3. Make your changes
4. Click "Save"

### Deleting a Testimonial

1. In Tina CMS, click "Testimonials"
2. Select the testimonial you want to delete
3. Click the delete button
4. Confirm deletion

## File Structure

Each testimonial is stored as a Markdown file with frontmatter:

```markdown
---
name: Sara M.
location: Kingston
quote: After Veritas Insulation completed our attic...
metric: Reduced winter heating costs by 28%
rating: 5
order: 1
featured: true
---
```

## Notes

- Images have been removed from testimonials for simplicity
- Testimonials are automatically sorted by the `order` field
- Changes made in Tina CMS are immediately reflected on the website after saving
- The `featured` flag can be used for future enhancements (e.g., showing featured testimonials on other pages)
