import { FileDBAdapter } from '@supergrowthai/next-blog';
import path from 'path';

const db = new FileDBAdapter(path.join(process.cwd(), 'blog-data/'));

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const blog = await db.blogs.findOne({ slug: slug });

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
    );
}