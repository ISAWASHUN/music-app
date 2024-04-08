import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SongList(props) {
  if (props.isLoading)
    return (
      <div className="inset-0 flex justify-center items-center">
        <FontAwesomeIcon icon={faSpinner} spin size="3x" />
      </div>
    );

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
      {props.songs.map((song) => (
        <div
          key={song.id}
          className="flex flex-col items-center"
          onClick={() => props.onSongSelected(song)}
          >
          <img
            src={song.album.images[0].url}
            alt={song.album.name}
            className="rounded-lg w-48 h-48 object-cover"
          />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">{song.name}</h3>
            <p className="text-sm text-gray-400">{song.artists[0].name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
