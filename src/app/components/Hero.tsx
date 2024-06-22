export default async function Hero() {
    return (
      <section className="container my-16">
        <h1 className="text-4xl font-bold text-center">
        Unlock Your Potential,<br />Find Your Path.
        </h1>
        <p className="text-center text-gray-600 mt-5">
  At SkillSeek, we believe in empowering your career journey. Discover opportunities that match your unique talents, connect with employers who value your skills, and take the next step towards professional growth. Whether you&apos;re starting out or seeking new challenges, SkillSeek is your partner in unlocking your potential and finding your ideal path.
</p>
        <form className="flex gap-2 mt-4 max-w-md mx-auto">
          <input
            type="search"
            className="border border-gray-400 w-full py-2 px-3 rounded-md"
            placeholder="Search phrase.." />
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
            Search
          </button>
        </form>
      </section>
    );
  }