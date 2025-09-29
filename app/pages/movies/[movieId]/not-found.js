export default function MovieNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-[22px] text-center sm:text-4xl font-bold mb-2 text-purple-600">Movie Not Found</h1>
      <p className="text-[17px] text-center sm:text-lg text-white">Sorry, this movie does not exist in our list.</p>
      <button>😅 😅 😅</button>
    </div>
  );
}

