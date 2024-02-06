import { useState } from "react";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ArticleService from "../services/ArticleService";
import { useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";

const Article = () => {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const formData = new FormData();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(false);

    formData.append("title", title);
    formData.append("content", content);
    formData.append("user_id", 1);
    formData.append("image", image);
    formData.append("video", video);

    try {
      await ArticleService.create(formData);
      setTitle("");
      setContent("");
      setVideo("");
      setImage("");

      setLoading(true);
      navigate("/");
      alert("Data saved successfully!");
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <form onSubmit={handleSave}>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4">
            {loading === false ? (
              <div className="flex flex-wrap -mx-3 mb-6">
                <Loading />
              </div>
            ) : (
              <>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      htmlFor="title"
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                      Title <span className="text-warning">*</span>
                    </label>
                    <input
                      type="text"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-title"
                      placeholder="Baloney"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-content"
                >
                  Content <span className="text-warning">*</span>
                </label>
                <textarea
                  cols="10"
                  rows="5"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Fill Content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Image <span className="text-warning">*</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                  id="image"
                  accept=".jpeg,.png,.jpg,.gif,.svg"
                  onChange={handleImageChange}
                  required
                />
              </div>

              <div className="w-full px-3 mt-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Video <span className="text-warning">*</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                  id="video"
                  accept="video/mp4,video/x-m4v"
                  onChange={handleVideoChange}
                  required
                />
              </div>

              <div className="w-full px-3 mt-1">
                <span className="text-sm ">Format Video : mp4</span>
              </div>
              <div className="w-full px-3 mt-1">
                <span className="text-sm">File Size : 20Mb</span>
              </div>
            </div>
            <Button text="Save" />
              </>
            )}

          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Article;
