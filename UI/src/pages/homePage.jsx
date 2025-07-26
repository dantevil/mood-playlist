import useHome from "../hooks/useHome";
import TextField from "../components/TextField";
import ListCard from "../components/ListCard";
import musicImage from "../assets/music.jpg";

function HomePage() {
  const { handleChange, handleSubmit, text, list, loading, handleNavigate } =
    useHome();

  return (
    <div
      className="min-h-screen bg-cover bg-center p-6 flex flex-col items-center space-y-6"
      style={{ backgroundImage: `url(${musicImage})` }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-black text-center tracking-tight drop-shadow-lg">
        Dil Se DJs
      </h1>

      <TextField
        text={text}
        handleChange={handleChange}
        handleClick={handleSubmit}
        loading={loading}
      />

      <ListCard lists={list} handleNavigate={handleNavigate} />
    </div>
  );
}

export default HomePage;