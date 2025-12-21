'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ContentToggle from './ContentToggle';

const BlogProjectsContent = ({ posts, projects }) => {
  const [activeView, setActiveView] = useState('blog');
  const params = useParams();
  const locale = params.locale || 'en';

  const currentItems = activeView === 'blog' ? posts : projects;
  const basePath = activeView === 'blog' ? `/${locale}/blog` : `/${locale}/projects`;

  return (
    <>
      {/* Toggle */}
      <ContentToggle onToggle={setActiveView} initialView="blog" />

      {/* Content Grid */}
      {currentItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">
            {activeView === 'blog'
              ? 'No blog posts yet. Check back soon!'
              : 'No projects yet. Check back soon!'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item, index) => (
            <Link
              key={item.slug}
              href={`${basePath}/${item.slug}`}
              className="group animate-fade-in-up flex"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col w-full">
                {/* Featured Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden flex-shrink-0">
                  {item.featuredImage ? (
                    <Image
                      src={item.featuredImage}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary-500/20 flex items-center justify-center">
                        <svg
                          className="w-10 h-10 text-primary-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <span className="truncate">{activeView === 'blog' ? item.author : item.location}</span>
                    <time className="flex-shrink-0 ml-2">
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors line-clamp-2 min-h-[3.5rem]">
                    {item.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">
                    {item.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center text-primary-500 font-medium group-hover:gap-2 transition-all mt-auto">
                    <span>{activeView === 'blog' ? 'Read More' : 'View Project'}</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default BlogProjectsContent;
