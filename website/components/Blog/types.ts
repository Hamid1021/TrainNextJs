export interface Blog {
    id: number;
    title: string;
    content: string;
    authorId: number;
    createdAt: string;
    updatedAt: string;
    published: boolean;
    visit: number;
}

export interface BlogProps {
    blog: Blog;
}
