function NewsLetter() {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the default form submission
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-700">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 pl-3 border rounded"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email ..."
          required
          className="w-full sm:flex-1 outline-none"
        />
        <button
          type="submit"
          className="py-4 px-6 sm:px-10 bg-black text-white text-xs hover:bg-gray-700 rounded-r"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

export default NewsLetter;
