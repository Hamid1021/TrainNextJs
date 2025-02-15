import React from "react";

const AnimeLoading = () => {
    return (
        <section id="last-animes" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">اخرین انیمه ها</h2>
            <div className="grid grid-cols-1 gap-y-3">
                {[...Array(3)].map((_, index) => (
                    <div className="anime-item-empty" key={index}>
                        <div className="anime-img-empty">
                        </div>
                        <div className="anime-title-empty">
                        </div>
                        <div className="anime-desc-empty">
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AnimeLoading;
