export interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export interface PropsContent {
    selectedGenreId?: number
    selectedGenre: GenreResponseProps
}

export interface PropsSidbar {
    selectedGenreId?: number
    setGenred: (arg0: number) => void
}