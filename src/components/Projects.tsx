import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Calendar, Tag, Star, GitFork, Image as ImageIcon } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  has_pages: boolean;
  default_branch: string;
}

const Projects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  const [filteredRepos, setFilteredRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        // Fetch all repositories (GitHub API allows up to 100 per page)
        const response = await fetch('https://api.github.com/users/ChamikaShashipriya99/repos?sort=updated&per_page=100');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        setRepos(data);
        setFilteredRepos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  // Get unique languages from repositories
  const getUniqueLanguages = () => {
    const languages = repos
      .map(repo => repo.language)
      .filter(language => language !== null && language !== undefined);
    return ['All', ...Array.from(new Set(languages))];
  };

  // Filter repositories by selected language
  useEffect(() => {
    if (selectedLanguage === 'All') {
      setFilteredRepos(repos);
    } else {
      setFilteredRepos(repos.filter(repo => repo.language === selectedLanguage));
    }
  }, [selectedLanguage, repos]);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: 'bg-yellow-500',
      TypeScript: 'bg-blue-600',
      Python: 'bg-green-600',
      Java: 'bg-red-600',
      'C++': 'bg-blue-500',
      HTML: 'bg-orange-500',
      CSS: 'bg-blue-400',
      React: 'bg-cyan-500',
      Vue: 'bg-green-500',
      Angular: 'bg-red-500',
      'C#': 'bg-purple-600',
      PHP: 'bg-indigo-600',
      Ruby: 'bg-red-700',
      Go: 'bg-cyan-600',
      Rust: 'bg-orange-600',
      Swift: 'bg-orange-500',
      Kotlin: 'bg-purple-500',
      Dart: 'bg-blue-500',
    };
    return colors[language] || 'bg-gray-500';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  const getRepoImageUrl = (repo: GitHubRepo) => {
    // Try to get repository preview image from GitHub Pages or README
    if (repo.has_pages) {
      return `https://raw.githubusercontent.com/ChamikaShashipriya99/${repo.name}/${repo.default_branch}/preview.png`;
    }
    return `https://raw.githubusercontent.com/ChamikaShashipriya99/${repo.name}/${repo.default_branch}/screenshot.png`;
  };

  const getFallbackImage = (repo: GitHubRepo) => {
    // Generate a fallback image based on repository name and language
    const colors = ['from-blue-500', 'from-purple-500', 'from-green-500', 'from-red-500', 'from-yellow-500', 'from-pink-500'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    return (
      <div className={`w-full h-48 bg-gradient-to-br ${randomColor} to-gray-600 rounded-t-xl flex items-center justify-center`}>
        <div className="text-center text-white">
          <div className="text-4xl font-bold mb-2">{repo.name.charAt(0).toUpperCase()}</div>
          <div className="text-sm opacity-80">{repo.language || 'Code'}</div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                GitHub Projects
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Loading my latest projects from GitHub...
              </p>
            </div>

            {/* Loading Filter Skeleton */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-3">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="w-24 h-10 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
                    <div className="flex gap-2 mb-4">
                      <div className="h-6 w-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
                      <div className="h-6 w-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              GitHub Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-red-600 dark:text-red-400">
              Error loading repositories: {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              GitHub Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Here are my projects and contributions from GitHub ({repos.length} repositories)
            </p>
          </div>

          {/* Language Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {getUniqueLanguages().map((language) => (
                <button
                  key={language}
                  onClick={() => setSelectedLanguage(language)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105 ${
                    selectedLanguage === language
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {language === 'All' ? (
                    <span className="flex items-center gap-2">
                      <span>All Languages</span>
                      <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                        {repos.length}
                      </span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${getLanguageColor(language)}`}></div>
                      {language}
                      <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                        {repos.filter(repo => repo.language === language).length}
                      </span>
                    </span>
                  )}
                </button>
              ))}
            </div>
            
            {/* Results Count */}
            <div className="text-center mt-6">
              <p className="text-gray-600 dark:text-gray-400">
                Showing {filteredRepos.length} of {repos.length} repositories
                {selectedLanguage !== 'All' && ` in ${selectedLanguage}`}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRepos.map((repo) => (
              <div 
                key={repo.id}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Repository Image */}
                <div className="relative">
                  <img 
                    src={getRepoImageUrl(repo)}
                    alt={`${repo.name} preview`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Replace with fallback on error
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {getFallbackImage(repo)}
                </div>

                {/* Repository Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                        {repo.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                        {repo.description || 'No description available'}
                      </p>
                    </div>
                  </div>

                  {/* Repository Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star size={14} />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={14} />
                      <span>{repo.forks_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{formatDate(repo.updated_at)}</span>
                    </div>
                  </div>

                  {/* Language and Topics */}
                  <div className="mb-4">
                    {repo.language && (
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{repo.language}</span>
                      </div>
                    )}
                    
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {repo.topics.slice(0, 3).map((topic, index) => (
                          <span 
                            key={index}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                          >
                            <Tag size={10} />
                            {topic}
                          </span>
                        ))}
                        {repo.topics.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                            +{repo.topics.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <a 
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm font-medium transition-colors"
                    >
                      <Github size={14} />
                      View Code
                    </a>
                    {repo.homepage && (
                      <a 
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <a 
              href="https://github.com/ChamikaShashipriya99?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <Github size={18} />
              View All Repositories ({repos.length})
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;