import { useMemo, useState } from "react";
import Card from "@/components/ui/card";
import Filter from "@/components/ui/filter";
import SharpButton from "@/components/ui/sharpButton";
import GalleryModal from "@/components/ui/galleryModal";
import {
  filterProjects,
  projects,
  type FilterTab,
  type Project,
} from "@/data/projects";

interface ProectsSectionProps {
  title?: string;
  gridConfig?: number[];
  className?: string;
  filterClassName?: string;
  showButton?: boolean;
  showHeader?: boolean;
  showFilter?: boolean;
  showCards?: number[];
  showAll?: boolean;
  showPools?: boolean;
  showSaunas?: boolean;
}

const ProectsSection = ({
  title = "Проекты",
  gridConfig = [2, 4, 3],
  className = "",
  filterClassName = "",
  showButton = true,
  showHeader = true,
  showFilter = true,
  showCards,
  showAll = false,
  showPools = false,
  showSaunas = false,
}: ProectsSectionProps) => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");

  const handleCardClick = (project: Project) => {
    setGalleryImages(project.images);
    setGalleryOpen(true);
  };

  const gridCols: Record<number, string> = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 xl:grid-cols-3",
    4: "sm:grid-cols-2 xl:grid-cols-4",
  };

  const baseProjects = useMemo(
    () =>
      showCards
        ? projects.filter((project) => showCards.includes(project.id))
        : projects,
    [showCards],
  );

  const filteredProjects = useMemo(() => {
    let items = baseProjects;

    if (showPools && !showSaunas) {
      items = items.filter((project) => project.categories.includes("pool"));
    } else if (showSaunas && !showPools) {
      items = items.filter((project) => project.categories.includes("sauna"));
    }

    if (showFilter) {
      return filterProjects(activeFilter, items);
    }

    return items;
  }, [activeFilter, baseProjects, showFilter, showPools, showSaunas]);

  const gridRows = useMemo(() => {
    if (showAll) return [];

    let offset = 0;
    return gridConfig
      .map((cols) => {
        const row = filteredProjects.slice(offset, offset + cols);
        offset += cols;
        return { cols, projects: row };
      })
      .filter((row) => row.projects.length > 0);
  }, [filteredProjects, gridConfig, showAll]);

  return (
    <div className="mt-24 max-w-[90dvw] m-auto lg:mt-48">
      <div className="mx-auto flex max-w-[90dvw] items-center gap-4">
        <div className="h-px flex-1 bg-black/15" />
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#687C96]">
          проекты
        </span>
      </div>

      {(showHeader || showFilter) && (
        <div className="mt-8 flex flex-col justify-between gap-6 2xl:flex-row 2xl:items-end">
          {showHeader && (
            <div className="flex flex-col sm:flex-row 2xl:items-center 2xl:justify-center">
              <h1
                className={`${className} font-bold normal-case lg:uppercase text-4xl lg:text-[70px]`}
              >
                {title}
              </h1>
            </div>
          )}

          {showFilter && (
            <div className="w-full 2xl:max-w-[520px]">
              <Filter
                className={filterClassName}
                value={activeFilter}
                onChange={setActiveFilter}
              />
            </div>
          )}
        </div>
      )}

      <div className="mt-10 flex flex-col gap-6 sm:gap-8 lg:mt-20">
        {filteredProjects.length === 0 ? (
          <p className="text-center text-lg text-[#4B4B4B]/70">
            Проекты в этой категории скоро появятся
          </p>
        ) : showAll ? (
          <div className="grid grid-cols-1 gap-4 p-3 sm:grid-cols-2 sm:gap-5 sm:p-0 lg:gap-6 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                subtitle={project.subtitle}
                image={project.cover}
                onClick={() => handleCardClick(project)}
              />
            ))}
          </div>
        ) : (
          gridRows.map((row, idx) => (
            <div
              key={idx}
              className={`flex flex-col gap-4 p-3 sm:grid sm:gap-5 sm:p-0 lg:gap-6 ${gridCols[row.cols] ?? gridCols[3]}`}
            >
              {row.projects.map((project) => (
                <Card
                  key={project.id}
                  title={project.title}
                  subtitle={project.subtitle}
                  image={project.cover}
                  onClick={() => handleCardClick(project)}
                />
              ))}
            </div>
          ))
        )}

        {showButton && <SharpButton title="Все проекты" href="/works" />}
      </div>

      <GalleryModal
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        images={galleryImages}
      />
    </div>
  );
};

export default ProectsSection;
