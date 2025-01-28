export interface blogs {
    id: number;
    title: string;
    description?: string;
    visit?: number;
}

export interface BlogProps {
    Blog: blogs;
}