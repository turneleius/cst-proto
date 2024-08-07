import Link from 'next/link'

const RoleSelection = () => {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-white shadow-lg rounded-3xl w-full max-w-lg mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Select Account Type</h1>

        <div className="flex gap-8">
            <button className="flex flex-col items-center border-2 border-gray-300 bg-white rounded-2xl px-12 py-6 text-xl font-bold transition-transform hover:border-gray-500">
                <img src="/mentor.png" alt="Mentor Icon" className="mb-4 w-16 h-16" />
                Mentor
            </button>

            <Link href="/student">
                <button className="flex flex-col items-center border-2 border-gray-300 bg-white rounded-2xl px-12 py-6 text-xl font-bold transition-transform hover:border-gray-500">
                    <img src="/student.png" alt="Student Icon" className="mb-4 w-16 h-16" />
                    Student
                </button>
            </Link>

        </div>
      </div>
    );
  }
  
  export default RoleSelection;
  