import Link from "next/link";
import { programs } from "../lib/mbc";
import { programCategories } from "../lib/program-categories";

export default function ProgramMap() {
  return (
    <div className="program-map-list">
      {programCategories.map((category) => {
        const categoryPrograms = programs.filter((program) => program.category === category.name);
        return (
          <section className={`program-map-group ${category.accent}`} key={category.name}>
            <div className="program-map-group-head">
              <div className="program-map-motif" aria-hidden="true">{category.motif}</div>
              <div className="program-map-group-title">
                <span>{categoryPrograms.length} pilihan les</span>
                <h3>{category.name}</h3>
                <p>{category.note}</p>
              </div>
            </div>
            <div className="program-map-items">
              {categoryPrograms.map((program) => (
                <Link href={`/program/${program.slug}`} className="program-map-item" key={program.slug}>
                  <span className="program-map-icon" aria-hidden="true">{program.icon}</span>
                  <span className="program-map-item-text"><strong>{program.title}</strong><small>{program.levels.join(" · ")}</small></span>
                  <span className="program-map-arrow" aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}