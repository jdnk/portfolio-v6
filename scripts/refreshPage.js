const refreshPage = () => {
  var previousScreenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  const refreshPage = () => {
    window.location.reload();
  }

  const checkScreenWidth = () => {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
    if (screenWidth <= 768 && previousScreenWidth > 768) {
      refreshPage();
    } else if (screenWidth > 768 && previousScreenWidth <= 768) {
      refreshPage();
    }
  
    previousScreenWidth = screenWidth;
  }

  window.addEventListener('load', checkScreenWidth);
  window.addEventListener('resize', checkScreenWidth);
}
