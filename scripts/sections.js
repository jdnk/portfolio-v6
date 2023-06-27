const changeWidthOnHover = (sections, isMobile) => {
  const hoverSize = 50;
  const nonHoverSize = 12.5;
  const delay = 300;

  sections.forEach(section => {
    const hoverable = document.querySelector(section.id);

    const expandFunction = () => {
      setTimeout(() => {
        sections.forEach(subsection => {
          const e = document.querySelector(subsection.id);

          if (subsection.id === section.id) {
            if (isMobile) {
              e.style.height = `${hoverSize}vh`;
            } else {
              e.style.width = `${hoverSize}vw`;
            }
          } else {
            if (isMobile) {
              e.style.height = `${nonHoverSize}vh`;
            } else {
              e.style.width = `${nonHoverSize}vw`;              
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
            e.style.height = `${subsection.size}vh`;
          } else {
            e.style.width = `${subsection.size}vw`;
          }
        })
      }, delay);
    };

    hoverable.addEventListener("mouseover", expandFunction);
    hoverable.addEventListener("mouseout", shrinkFunction);
  });
};

const sections = [
  {id: "#contact", size: 15},
  {id: "#about", size: 25},
  {id: "#work", size: 35}
];

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 768) {
    changeWidthOnHover(sections, true);
  } else {
    changeWidthOnHover(sections);    
  }
});
