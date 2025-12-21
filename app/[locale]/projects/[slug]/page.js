import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/sections/Footer';

// Get all project slugs for static generation
export async function generateStaticParams() {
  const projectsDirectory = path.join(process.cwd(), 'content/projects');

  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames
    .filter(fileName => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => ({
      slug: fileName.replace(/\.mdx?$/, ''),
    }));
}

// Get project data
function getProjectBySlug(slug) {
  const projectsDirectory = path.join(process.cwd(), 'content/projects');
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);

  // Try .mdx first, then .md
  let fileContents;
  try {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } catch {
    const mdPath = path.join(projectsDirectory, `${slug}.md`);
    fileContents = fs.readFileSync(mdPath, 'utf8');
  }

  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data,
    content,
  };
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);

  return {
    title: `${project.frontmatter.title} - Veritas Projects`,
    description: project.frontmatter.excerpt,
  };
}

// Custom MDX components
const components = {
  h1: ({ children }) => (
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 mt-8">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-8">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 mt-6">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-700">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-lg text-gray-700">
      {children}
    </li>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-primary-500 hover:text-primary-600 underline transition-colors"
    >
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="bg-gray-100 text-primary-600 px-2 py-1 rounded text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary-500 pl-6 italic text-gray-600 my-6">
      {children}
    </blockquote>
  ),
};

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);
  const locale = params.locale || 'en';

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto container-padding">
          {/* Back to Blog */}
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors mb-8 group"
          >
            <svg
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog & Projects
          </Link>

          {/* Header */}
          <header className="mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {project.frontmatter.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{project.frontmatter.location}</span>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <time>
                  {new Date(project.frontmatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 leading-relaxed">
              {project.frontmatter.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          {project.frontmatter.featuredImage && (
            <div className="relative h-96 mb-12 rounded-2xl overflow-hidden animate-fade-in">
              <Image
                src={project.frontmatter.featuredImage}
                alt={project.frontmatter.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          )}

          {/* Before & After Images */}
          {(project.frontmatter.beforeImages || project.frontmatter.afterImages) && (
            <div className="mb-12">
              {/* Before Images */}
              {project.frontmatter.beforeImages && project.frontmatter.beforeImages.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Before</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.frontmatter.beforeImages.map((img, index) => (
                      <div key={index} className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={img.image}
                          alt={img.caption || `Before image ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {img.caption && (
                          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                            {img.caption}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* After Images */}
              {project.frontmatter.afterImages && project.frontmatter.afterImages.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">After</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.frontmatter.afterImages.map((img, index) => (
                      <div key={index} className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={img.image}
                          alt={img.caption || `After image ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {img.caption && (
                          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                            {img.caption}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Project Details Content */}
          <div className="prose prose-lg max-w-none animate-fade-in-up animation-delay-200">
            <MDXRemote source={project.content} components={components} />
          </div>

          {/* Divider */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors font-medium"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              View All Projects
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
