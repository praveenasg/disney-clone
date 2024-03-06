const getImagePath = (imagePath?: string, fullSize?: boolean) => {
  return imagePath
    ? `https://image.tmdb.org/t/p/${
        fullSize ? "original" : "w500"
      }/${imagePath}`
    : "https://img.freepik.com/free-vector/red-movie-theater-seats-with-curtains-background_1017-38388.jpg";
};

export default getImagePath;
