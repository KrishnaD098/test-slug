import nextBlog, { FileDBAdapter } from "@supergrowthai/next-blog"
import path from 'path';
import fs from 'fs';

// Create path for file db
const dataPath = path.join(process.cwd(), "blog-data");

// Ensure directory exists
if (!fs.existsSync(dataPath)) {
    fs.mkdirSync(dataPath, { recursive: true });
}

// Initialize the database provider
const dbProvider = async () => new FileDBAdapter(dataPath)

// Initialize Next-Blog
const {GET, POST} = nextBlog({db: dbProvider})

export { GET, POST };