// CoursesFilterPage.tsx
import React, { useState } from "react";
import styles from "./Filter.module.scss";
import CourseCards from "../../common/CourseCards/CourseCards";
import CourseCardHeading from "../coursescardsheading/CourseCardsHeading";

interface FilterState {
  sortBy: 'latest' | 'oldest';
  categories: string[];
  levels: string[];
  priceRange: number;
  searchQuery: string;
  activeChips: string[];
}

export const CoursesFilterPage: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    sortBy: 'latest',
    categories: [], // Empty to show all
    levels: [], // Empty to show all
    priceRange: 3000, // Max value to show all
    searchQuery: '',
    activeChips: []
  });

  const handleSortChange = (value: 'latest' | 'oldest') => {
    setFilters(prev => ({ ...prev, sortBy: value }));
  };

  const handleCategoryToggle = (category: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleLevelToggle = (level: string) => {
    setFilters(prev => ({
      ...prev,
      levels: prev.levels.includes(level)
        ? prev.levels.filter(l => l !== level)
        : [...prev.levels, level]
    }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, priceRange: Number(e.target.value) }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, searchQuery: e.target.value }));
  };

  const handleChipRemove = (chip: string) => {
    setFilters(prev => ({
      ...prev,
      activeChips: prev.activeChips.filter(c => c !== chip)
    }));
  };

  const handleClearAll = () => {
    setFilters({
      sortBy: 'latest',
      categories: [],
      levels: [],
      priceRange: 3000,
      searchQuery: '',
      activeChips: []
    });
  };

  return (
   <>
   <CourseCardHeading/>
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2>Filters</h2>
          <button className={styles.clearBtn} onClick={handleClearAll}>
            Clear All
          </button>
        </div>

        <button className={styles.topCoursesBtn}>View Top Courses</button>

        <div className={styles.filterGroup}>
          <p className={styles.filterTitle}>Sort By</p>
          <label>
            <input
              type="radio"
              name="sort"
              checked={filters.sortBy === 'latest'}
              onChange={() => handleSortChange('latest')}
            />
            <span>Latest to Oldest</span>
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              checked={filters.sortBy === 'oldest'}
              onChange={() => handleSortChange('oldest')}
            />
            <span>Oldest to Latest</span>
          </label>
        </div>

        <div className={styles.filterGroup}>
          <p className={styles.filterTitle}>Category</p>
          <label>
            <input
              type="checkbox"
              checked={filters.categories.includes('Tech')}
              onChange={() => handleCategoryToggle('Tech')}
            />
            <span>Tech</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.categories.includes('Non-Tech')}
              onChange={() => handleCategoryToggle('Non-Tech')}
            />
            <span>Non-Tech</span>
          </label>
        </div>

        <div className={styles.filterGroup}>
          <p className={styles.filterTitle}>Level</p>
          <label>
            <input
              type="checkbox"
              checked={filters.levels.includes('Beginner')}
              onChange={() => handleLevelToggle('Beginner')}
            />
            <span>Beginner</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.levels.includes('Intermediate')}
              onChange={() => handleLevelToggle('Intermediate')}
            />
            <span>Intermediate</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.levels.includes('Advanced')}
              onChange={() => handleLevelToggle('Advanced')}
            />
            <span>Advanced</span>
          </label>
        </div>

        <div className={styles.filterGroup}>
          <p className={styles.filterTitle}>Price</p>
          <input
            type="range"
            min={0}
            max={3000}
            value={filters.priceRange}
            onChange={handlePriceChange}
          />
          <div className={styles.priceLabel}>₹0 - ₹{filters.priceRange}</div>
        </div>
      </aside>

      <main className={styles.main}>
        <div className={styles.topBar}>
          <div className={styles.searchWrapper}>
            <input
              className={styles.searchInput}
              placeholder='Search "The Course" for you'
              value={filters.searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          {filters.activeChips.length > 0 && (
            <div className={styles.chipsWrapper}>
              {filters.activeChips.map((chip, index) => (
                <button
                  key={index}
                  className={styles.chip}
                  onClick={() => handleChipRemove(chip)}
                >
                  {chip} ✕
                </button>
              ))}
            </div>
          )}
          <button className={styles.categoriesBtn}>Categories ▾</button>
        </div>

        <section className={styles.cardsGrid}>
          <CourseCards filters={filters} />
        </section>

        <div className={styles.pagination}>
          <button className={styles.pageBtn}>{"<"}</button>
          <button className={`${styles.pageBtn} ${styles.activePage}`}>1</button>
          <button className={styles.pageBtn}>2</button>
          <button className={styles.pageBtn}>3</button>
          <button className={styles.pageBtn}>{">"}</button>
        </div>
      </main>
    </div>
   </>
  );
};
