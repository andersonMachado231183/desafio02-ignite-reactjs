import { Button } from '../components/Button';
import { GenreResponseProps } from "../App";
import "../styles/sidebar.scss";

interface SideBarProps {
  selectedGenreId: number;
  setSelectedGenreId(id: number): void;
  genres: GenreResponseProps[];
}   

export function SideBar( { genres, selectedGenreId, setSelectedGenreId }:SideBarProps) {
    
     function handleClickButton(id: number){
        setSelectedGenreId(id);
     }


    return(
        <nav className="sidebar">
            <span>Watch<p>Me</p></span>

            <div className="buttons-container">
              {genres.map(genre => (
                <Button
                  key={String(genre.id)}
                  title={genre.title}
                  iconName={genre.name}
                  onClick={() => handleClickButton(genre.id)}
                  selected={selectedGenreId === genre.id}
                />
              ))}
            </div>

          </nav>
  );
}