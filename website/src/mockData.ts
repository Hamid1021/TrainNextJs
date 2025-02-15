// mockData.js
export const mockBlogs = [
    {
        id: 1,
        title: 'موک بلاگ ۱',
        slug: 'mock-blog-1',
        content: 'محتوای موک بلاگ ۱',
        authorId: 1,
        createdAt: '2025-01-01T00:00:00Z',
        updatedAt: '2025-01-01T00:00:00Z',
        published: true,
        visit: 100,
    },
    {
        id: 2,
        title: 'موک بلاگ ۲',
        slug: 'mock-blog-2',
        content: 'محتوای موک بلاگ ۲',
        authorId: 1,
        createdAt: '2025-01-02T00:00:00Z',
        updatedAt: '2025-01-02T00:00:00Z',
        published: true,
        visit: 200,
    },
    // ...
];

export const mockProjects = [
    {
        id: 1,
        name: 'موک پروژه ۱',
        slug: 'mock-project-1',
        desc: 'توضیحات موک پروژه ۱',
        image: '/path/to/image1.jpg',
        reason: 'دلیل موک پروژه ۱',
        problemStatement: 'مسئله موک پروژه ۱',
        problemStatementImage: '/path/to/problemStatementImage1.jpg',
        userId: 1,
        createdAt: '2025-01-01T00:00:00Z',
        updatedAt: '2025-01-01T00:00:00Z',
    },
    {
        id: 2,
        name: 'موک پروژه ۲',
        slug: 'mock-project-2',
        desc: 'توضیحات موک پروژه ۲',
        image: '/path/to/image2.jpg',
        reason: 'دلیل موک پروژه ۲',
        problemStatement: 'مسئله موک پروژه ۲',
        problemStatementImage: '/path/to/problemStatementImage2.jpg',
        userId: 1,
        createdAt: '2025-01-02T00:00:00Z',
        updatedAt: '2025-01-02T00:00:00Z',
    },
    // ...
];
