import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
    id: 1,
    title: "The Dark Knight",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    genre: {
        name:"Action",
        description:"Action films are characterized by high-energy sequences of physical feats, stunts, and thrilling set pieces. They often feature intense fight scenes, car chases, explosions, and other adrenaline-pumping moments designed to keep viewers on the edge of their seats. Action films typically center around a heroic protagonist or group of protagonists facing off against formidable adversaries or overcoming challenging obstacles. While spectacle and excitement are paramount, action films may also explore themes of heroism, sacrifice, and redemption."
    },
    image:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    director: {
        name:"Christopher Nolan",
        bio: "Sir Christopher Nolan CBE, celebrated for cerebral storytelling, began his cinematic journey at age seven. From 'Following' (1998) to 'Tenet' (2020), his films redefine genres. 'The Dark Knight' (2008) and 'Inception' (2010) stand as milestones. 'Oppenheimer' (2023) earned his first Oscars. Knighted in 2024, he resides in Los Angeles with wife Dame Emma Thomas, overseeing Syncopy.",
        birth:"July, 30, 1970",
        death:"NA",
    }
    },
    {
    id: 2,
    title: "Schindler's List",
    description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    genre: {
        name:"Biography",
        description:"Biography films tell the life story of a real person or historical figure, providing insight into their achievements, struggles, and impact on the world. These films aim to portray the subject with accuracy and authenticity, often drawing from biographical sources such as memoirs, interviews, and historical records. Biopics can cover a wide range of individuals, from political leaders and cultural icons to artists, athletes, and ordinary people who have made extraordinary contributions to society."
    },
    image:
        "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    director: {
        name:"Steven Spielberg",
        bio: "Steven Spielberg, born 1946 in Cincinnati, Ohio, is a pioneering director, producer, and writer, renowned for defining popular cinema with Jaws (1975). Raised in New Jersey and California, he dropped out of college to pursue filmmaking. His early works include the notable short film Amblin' (1968). Spielberg's TV directing paved the way for his blockbuster career, with classics like E.T. the Extra-Terrestrial (1982) and Duel (1971).",
        birth:"December 18, 1946",
        death:"NA",
    }
    },
    {
    id: 3,
    title: "The Godfather Part II",
    description: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    genre: {
        name:"Crime",
        description:"Crime films revolve around the world of criminals, law enforcement, and the pursuit of justice. They often depict the planning and execution of criminal activities, the investigation of crimes, and the moral ambiguity that surrounds them. Themes such as power, betrayal, and morality are common, and protagonists may include detectives, criminals, or antiheroes. Crime films can range from gritty and realistic portrayals to stylish and stylized interpretations of the criminal underworld."
    },
    image:
        "data:image/jpeg;base64,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",
    director: {
        name:"Francis Ford Coppola",
        bio: "Francis Ford Coppola, born 1939 in Detroit, Michigan, was raised in a creative Italian-American family. After drama studies at Hofstra University and filmmaking at UCLA, he worked with Roger Corman. Coppola's early collaborations and his second film earned him acclaim and an MFA. In 1969, he co-founded American Zoetrope. His seminal work, The Godfather (1972), brought him critical acclaim and Oscars for writing and producing. Coppola's diverse filmography includes The Conversation (1974) and Apocalypse Now (1979). Despite personal tragedy in 1986, he remains an influential and controversial figure in American cinema.",
        birth:"April 7, 1939",
        death:"NA",
      }
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
