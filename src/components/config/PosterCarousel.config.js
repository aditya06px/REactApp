const settings = {
  infinity: false,
  autoplay: false,
  slidesToShow: 5,
  slidesToscroll: 2,
  InitialSlide: 0, // react slick doesn't follow mobile first approach
  responsive: [
    {
      breakpoints: 1024,
      settings: {
        slidesToShow: 3,
        slidesToscroll: 2,
        infinite: true,
      },
    },
    {
      breakpoints: 600,
      settings: {
        slidesToShow: 2,
        slidesToscroll: 1,
        InitialSlide: 1,
      },
    },
    {
      breakpoints: 480,
      settings: {
        slidesToShow: 2,
        slidesToscroll: 1,
      },
    },
  ],
};

export default settings;
