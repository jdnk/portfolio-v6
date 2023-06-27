const changeWidthOnHover = (sections, isMobile) => {
  const hoverSize = [60, 50];
  const nonHoverSize = [20, 12.5];
  const delay = 300;

  sections.forEach(section => {
    const hoverable = document.querySelector(section.id);

    const expandFunction = () => {
      setTimeout(() => {
        sections.forEach(subsection => {
          const e = document.querySelector(subsection.id);

          if (subsection.id === section.id) {
            if (isMobile) {
              e.style.height = `${hoverSize[1]}%`;
            } else {
              e.style.width = `${hoverSize[0]}%`;
            }
          } else {
            if (isMobile) {
              e.style.height = `${nonHoverSize[1]}%`;
            } else {
              e.style.width = `${nonHoverSize[0]}%`;              
            }
          }
        })
      }, delay);
    };

    const shrinkFunction = () => {
      setTimeout(() => {
        sections.forEach(subsection => {
          const e = document.querySelector(subsection.id);
          if (isMobile) {
            e.style.height = `${subsection.size[1]}%`;
          } else {
            e.style.width = `${subsection.size[0]}%`;
          }
        })
      }, delay);
    };

    hoverable.addEventListener("mouseover", expandFunction);
    hoverable.addEventListener("mouseout", shrinkFunction);
  });
};

const sections = [
  {id: "#contact", size: [20, 15]},
  {id: "#about", size: [30, 25]},
  {id: "#work", size: [50, 35]}
];

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 768) {
    changeWidthOnHover(sections, true);
  } else {
    changeWidthOnHover(sections);    
  }
});
