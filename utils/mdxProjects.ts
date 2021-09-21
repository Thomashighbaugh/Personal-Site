import fs from 'fs';
import path from 'path';
//
export const PROJECTS_PATH = path.join(process.cwd(), 'projects');

// postFilePaths is the list of all mdx files inside the projectS_PATH directory
export const projectFilePaths = fs
  .readdirSync(PROJECTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));
