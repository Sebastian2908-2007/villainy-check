import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Replace these dummy links with your actual navigation links */}
          <Link className="text-blue-800 hover:underline" href="/quiz/admin/createquiz">
           Create a quiz
          </Link>
          <Link className="text-blue-800 hover:underline" href="/quiz/currentQuizzes">
            All quizzes
          </Link>
          <Link className="text-blue-800 hover:underline" href="/about">
            About Us
          </Link>
        </div>
        <div className="text-blue-800 text-2xl font-semibold">Your Logo</div>
        {/* Add any logo elements here */}
      </div>
    </header>
  );
};

export default Header;