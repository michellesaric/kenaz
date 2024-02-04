export const categoryRename = (categoryName) => {
  const categoryMap = {
    news: "general",
    News: "general",
    sport: "sports",
    Sport: "sports",
    business: "business",
    Business: "business",
    life: "health",
    tech: "technology",
    travel: "entertainment",
    general: "news",
    sports: "sport",
    health: "life",
    technology: "tech",
  };

  return categoryMap[categoryName] || "travel";
};
