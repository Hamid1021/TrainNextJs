export default function BlogLoading(props: { showPaginator?: boolean }) {
    const { showPaginator } = props;
    return (
        <>
            <section id="last-blogs" className="mb-8">
                <h2 className="text-2xl 2xs:text-sm font-semibold mb-4 dark:text-white sm:text-[24px] sm:font-bold">اخرین نوشته ها</h2>
                <div className="grid grid-cols-1 gap-y-4"></div>

                <div className="grid grid-cols-1 gap-y-4">
                    {[...Array(5)].map((_, index) => (
                        <div className="blog-item-empty" key={index}>
                        </div>
                    ))}
                </div>
                {
                    showPaginator ?
                        <div className="flex items-center my-3 justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 dark:bg-gradient-to-br dark:from-[rgb(46,13,114)] dark:from-35% dark:to-gray-500">
                            <div className="flex flex-1 justify-between sm:hidden dark:text-white">
                                <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" disabled>
                                    صفحه قبلی
                                </button>
                                <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" disabled>
                                    صفحه بعدی
                                </button>
                            </div>
                            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm text-gray-700 dark:text-white">
                                        نمایش
                                        <span className="font-medium"> 1 </span>
                                        تا
                                        <span className="font-medium"> ... </span>
                                        از مجموع
                                        <span className="font-medium"> ... </span>
                                    </p>
                                </div>
                                <div>
                                    <nav className="isolate inline-flex justify-center -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                        <button className="paginator-arrow rounded-l-md pointer-events-none opacity-50" disabled>
                                            <span className="sr-only">صفحه قبلی</span>
                                            <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25-4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                            </svg>
                                        </button>

                                        <button className="paginator-arrow rounded-r-md pointer-events-none opacity-50" disabled>
                                            <span className="sr-only">صفحه بعدی</span>
                                            <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        :
                        undefined
                }
            </section>
        </>
    );
}
