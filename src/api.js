export function getAllMovies() {
  return movies.map((movie) => ({ id: movie.id, title: movie.title }));
}

export function getMovie(id) {
  if (typeof id !== "number") {
    throw new Error(`ID must be a number. '${id}' is a ${typeof id}`);
  }
  const movie = movies.find((movie) => movie.id === id);
  if (!movie) {
    throw new Error(`Movie with ID ${id} not found`);
  }
  return movie;
}

export function searchMovies(search) {
  return movies.filter((movie) => {
    const title = movie.title.toLowerCase();
    return title.includes(search.toLowerCase());
  });
}

const movies = [
  {
    id: 1,
    title: "Akira",
    category_name: "Science Fiction",
    release_year: 1987,
    running_time: 124,
    rating_name: "R",
    disc_format_name: "DVD",
  },
  {
    id: 2,
    title: "Alien",
    category_name: "Science Fiction",
    release_year: 1979,
    running_time: 116,
    rating_name: "R",
    disc_format_name: "Blu-ray",
  },
  {
    id: 3,
    title: "Aliens",
    category_name: "Science Fiction",
    release_year: 1986,
    running_time: 137,
    rating_name: "R",
    disc_format_name: "Blu-ray",
  },
  {
    id: 4,
    title: "Avatar",
    category_name: "Science Fiction",
    release_year: 2009,
    running_time: 178,
    rating_name: "PG-13",
    disc_format_name: "Blu-ray",
  },
  {
    id: 5,
    title: "Blade Runner",
    category_name: "Science Fiction",
    release_year: 1992,
    running_time: 117,
    rating_name: "R",
    disc_format_name: "Blu-ray",
  },
  {
    id: 6,
    title: "Chappie",
    category_name: "Science Fiction",
    release_year: 2015,
    running_time: 120,
    rating_name: "R",
    disc_format_name: "Blu-ray",
  },
  {
    id: 7,
    title: "Children of Men",
    category_name: "Science Fiction",
    release_year: 2007,
    running_time: 110,
    rating_name: "R",
    disc_format_name: "DVD",
  },
  {
    id: 8,
    title: "Cloud Atlas",
    category_name: "Science Fiction",
    release_year: 2013,
    running_time: 172,
    rating_name: "R",
    disc_format_name: "Blu-ray + DVD",
  },
  {
    id: 9,
    title: "Dark City",
    category_name: "Science Fiction",
    release_year: 1998,
    running_time: 96,
    rating_name: "R",
    disc_format_name: "DVD",
  },
  {
    id: 10,
    title: "Dawn of the Planet of the Apes",
    category_name: "Science Fiction",
    release_year: 2014,
    running_time: 130,
    rating_name: "PG-13",
    disc_format_name: "Blu-ray",
  },
  {
    id: 11,
    title: "District 9",
    category_name: "Science Fiction",
    release_year: 2009,
    running_time: 112,
    rating_name: "R",
    disc_format_name: "DVD",
  },
  {
    id: 12,
    title: "Dredd",
    category_name: "Science Fiction",
    release_year: 2013,
    running_time: 95,
    rating_name: "R",
    disc_format_name: "Blu-ray",
  },
  {
    id: 14,
    title: "Elysium",
    category_name: "Science Fiction",
    release_year: 2013,
    running_time: 109,
    rating_name: "R",
    disc_format_name: "Blu-ray + DVD",
  },
  {
    id: 15,
    title: "Fifth Element",
    category_name: "Science Fiction",
    release_year: 2007,
    running_time: 126,
    rating_name: "PG-13",
    disc_format_name: "Blu-ray",
  },
  {
    id: 16,
    title: "Interstellar",
    category_name: "Science Fiction",
    release_year: 2015,
    running_time: 169,
    rating_name: "PG-13",
    disc_format_name: "Blu-ray + DVD",
  },
  {
    id: 17,
    title: "Jurassic Park",
    category_name: "Science Fiction",
    release_year: 2014,
    running_time: 127,
    rating_name: "PG-13",
    disc_format_name: "Blu-ray + DVD",
  },
  {
    id: 18,
    title: "Looper",
    category_name: "Science Fiction",
    release_year: 2012,
    running_time: 119,
    rating_name: "R",
    disc_format_name: "Blu-ray",
  },
  {
    id: 19,
    title: "Matrix",
    category_name: "Science Fiction",
    release_year: 1999,
    running_time: 136,
    rating_name: "R",
    disc_format_name: "DVD",
  },
  {
    id: 20,
    title: "Minority Report",
    category_name: "Science Fiction",
    release_year: 2002,
    running_time: 146,
    rating_name: "PG-13",
    disc_format_name: "DVD",
  },
  {
    id: 22,
    title: "Rise of the Planet of the Apes",
    category_name: "Science Fiction",
    release_year: 2011,
    running_time: 105,
    rating_name: "PG-13",
    disc_format_name: "Blu-ray + DVD",
  },
  {
    id: 23,
    title: "Robocop",
    category_name: "Science Fiction",
    release_year: 1987,
    running_time: 103,
    rating_name: "R",
    disc_format_name: "DVD",
  },
  {
    id: 24,
    title: "Starship Troopers",
    category_name: "Science Fiction",
    release_year: 1997,
    running_time: 130,
    rating_name: "R",
    disc_format_name: "DVD",
  },
  {
    id: 25,
    title: "Terminator, The",
    category_name: "Science Fiction",
    release_year: 1984,
    running_time: 107,
    rating_name: "R",
    disc_format_name: "Blu-ray",
  },
  {
    id: 26,
    title: "Terminator 2: Judgment Day",
    category_name: "Science Fiction",
    release_year: 1991,
    running_time: 152,
    rating_name: "R",
    disc_format_name: "Blu-ray",
  },
  {
    id: 27,
    title: "Total Recall",
    category_name: "Science Fiction",
    release_year: 1990,
    running_time: 113,
    rating_name: "R",
    disc_format_name: "Blu-ray",
  },
  {
    id: 28,
    title: "War of the Worlds",
    category_name: "Science Fiction",
    release_year: 2005,
    running_time: 117,
    rating_name: "PG-13",
    disc_format_name: "DVD",
  },
  {
    id: 29,
    title: "Watchmen",
    category_name: "Action",
    release_year: 2009,
    running_time: 186,
    rating_name: "R",
    disc_format_name: "Blu-ray",
  },
];
