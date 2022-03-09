export const latestSectionQuery =
  "allArticles(filter: {}, orderBy: _createdAt_DESC)";

export const hardwareSectionQuery =
  'allArticles(filter: {category: {eq: "Hardware"}}, orderBy: _createdAt_ASC)';

export const cybersecSectionQuery =
  'allArticles(filter: {category: {eq: "Cybersec"}}, orderBy: _createdAt_ASC)';

export const programmingSectionQuery =
  'allArticles(filter: {category: {eq: "Programming"}}, orderBy: _createdAt_ASC)';

export const trendingSectionQuery =
  "allArticles(filter: {}, orderBy: _createdAt_ASC)";
