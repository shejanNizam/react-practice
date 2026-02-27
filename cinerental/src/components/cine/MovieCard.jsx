import { useContext, useState } from "react";
import Tag from "../../assets/tag.svg";
import { getImgUrl } from "../../utils/cine-utility";
import { MovieContext } from "../context";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { cartData, setCartData } = useContext(MovieContext);

  const handleAddToCart = (e, movie) => {
    e.stopPropagation();

    const foundMovie = cartData.find((item) => {
      return item.id === movie.id;
    });

    if (!foundMovie) {
      setCartData([...cartData, movie]);
    } else {
      console.log(`Already added this movie ${movie.title}`);
    }
  };

  const handleOpenModal = () => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleCloseModal}
          onAddCart={handleAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={handleOpenModal}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt="cover_image"
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src={Tag} alt="tag" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
