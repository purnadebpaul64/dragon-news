import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";

const SingleNewsCard = ({ news }) => {
  const { title, author, thumbnail_url, rating, total_view, details } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-md rounded-md overflow-hidden">
      {/* Top section with author and icons */}
      <div className="flex justify-between items-center px-4 py-3 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-accent-content">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-accent-content text-lg">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Body */}
      <div className="card-body p-4">
        <h2 className="card-title text-lg">{title}</h2>
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg my-3 max-h-52 object-cover w-full"
        />
        <p className="text-sm text-accent-content line-clamp-3">{details}</p>
        <span className="text-orange-500 font-semibold mt-2 inline-block cursor-pointer">
          Read More
        </span>
        <div className="py-1 border-b-[1px] border-base-300"></div>
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-1 text-yellow-500">
            {Array.from({ length: rating.number }, (_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-accent font-medium ml-2">
              {rating.number}
            </span>
          </div>
          <div className="flex items-center text-accent-content gap-1">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNewsCard;
