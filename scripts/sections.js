const changeWidthOnHover = (sections, isMobile) => {
  const hoverSize = 60;
  const nonHoverSize = 20;
  const delay = 300;

  sections.forEach(section => {
    const hoverable = document.querySelector(section.id);

    const expandFunction = () => {
      setTimeout(() => {
        sections.forEach(subsection => {
          const e = document.querySelector(subsection.id);

          if (subsection.id === section.id) {
            if (isMobile) {
              e.style.height = `${hoverSize}%`;
            } else {
              e.style.width = `${hoverSize}%`;
            }
          } else {
            if (isMobile) {
              e.style.height = `${nonHoverSize}%`;
            } else {
              e.style.width = `${nonHoverSize}%`;              
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
            e.style.height = `${subsection.size}%`;
          } else {
            e.style.width = `${subsection.size}%`;
          }
        })
      }, delay);
    };

    hoverable.addEventListener("mouseover", expandFunction);
    hoverable.addEventListener("mouseout", shrinkFunction);
  });
};

const sections = [
  {id: "#contact", size: 20},
  {id: "#about", size: 30},
  {id: "#work", size: 50}
];

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 768) {
    changeWidthOnHover(sections, true);
  } else {
    changeWidthOnHover(sections);    
  }
});
