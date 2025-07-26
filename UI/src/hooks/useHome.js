import {
  useState,
  useCallback
} from "react";
import toast from "react-hot-toast";
import axiosInstance from "../lib/axiosInstance";

const useHome = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleNavigate = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      toast.error("No URL found to open!");
    }
  };

  const handleSubmit = useCallback(async () => {
    console.log(text);
    if (text.length === 0) {
      toast.error("field cannot be empty");
      return;
    }
    setLoading(true);
    try {
      await toast.promise(
        (async () => {
          const res = await axiosInstance.post("recommend", {
           text
          });
          setList(res.data);
          // setTimeout(() => console.log("from handleClick", text), 5000);
        })(), {
          loading: "Finding the perfect playlist...",
          success: "Playlist ready to vibe with!",
          error: "Oops! Something went wrong.",
        }
      );
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }, [text]);

  return {
    handleChange,
    handleSubmit,
    list,
    text,
    loading,
    handleNavigate,
  };
};

export default useHome;