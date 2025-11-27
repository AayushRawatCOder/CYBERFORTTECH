import React from "react";
import styles from "./Filter.module.scss";
import CourseCards from "../../common/CourseCards/CourseCards";

export const CoursesFilterPage: React.FC = () => {
  // Placeholder array – replace with real cards or props
  const cards = Array.from({ length: 6 });

  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2>Filters</h2>
          <button className={styles.clearBtn}>Clear All</button>
        </div>

        <button className={styles.topCoursesBtn}>View Top Courses</button>

        <div className={styles.filterGroup}>
          <p className={styles.filterTitle}>Sort By</p>
          <label>
            <input type="radio" name="sort" defaultChecked />
            <span>Latest to Oldest</span>
          </label>
          <label>
            <input type="radio" name="sort" />
            <span>Oldest to Latest</span>
          </label>
        </div>

        <div className={styles.filterGroup}>
          <p className={styles.filterTitle}>Category</p>
          <label>
            <input type="checkbox" defaultChecked />
            <span>Tech</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>Non-Tech</span>
          </label>
        </div>

        <div className={styles.filterGroup}>
          <p className={styles.filterTitle}>Level</p>
          <label>
            <input type="checkbox" defaultChecked />
            <span>Beginner</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>Intermediate</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>Advanced</span>
          </label>
        </div>

        <div className={styles.filterGroup}>
          <p className={styles.filterTitle}>Price</p>
          <input type="range" min={0} max={1600} />
          <div className={styles.priceLabel}>₹0 - ₹1600</div>
        </div>
      </aside>

      <main className={styles.main}>
        <div className={styles.topBar}>
          <div className={styles.searchWrapper}>
            <input
              className={styles.searchInput}
              placeholder='Search "The Course" for you'
            />
          </div>
          <div className={styles.chipsWrapper}>
            <button className={styles.chip}>Tech ✕</button>
            <button className={styles.chip}>Beginner ✕</button>
            <button className={styles.chip}>30–35 hours ✕</button>
            <button className={styles.chip}>Online ✕</button>
            <button className={styles.chip}>₹1500–3000 ✕</button>
          </div>
          <button className={styles.categoriesBtn}>Categories ▾</button>
        </div>

        <section className={styles.cardsGrid}>
          <CourseCards/>
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
  );
};
