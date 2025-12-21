import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/sections/Footer';
import BlogProjectsContent from '@/components/ui/BlogProjectsContent';

// Get all blog posts
function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');

  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter(fileName => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        ...data,
      };
    })
    .sort((a, b) => (new Date(b.date) - new Date(a.date)));

  return posts;
}

// Get all projects
function getAllProjects() {
  const projectsDirectory = path.join(process.cwd(), 'content/projects');

  // Check if directory exists
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);

  const projects = fileNames
    .filter(fileName => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        ...data,
      };
    })
    .sort((a, b) => (new Date(b.date) - new Date(a.date)));

  return projects;
}

export const metadata = {
  title: 'Blog - Veritas Insulation',
  description: 'Expert insights on attic insulation, energy efficiency tips, home comfort solutions, and the latest in sustainable home improvements from the Veritas team.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const projects = getAllProjects();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto container-padding">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary-500">Blog</span> & <span className="text-primary-500">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights on attic insulation, energy efficiency tips, and real project transformations from the Veritas team.
            </p>
          </div>

          {/* Blog and Projects Content with Toggle */}
          <BlogProjectsContent posts={posts} projects={projects} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
