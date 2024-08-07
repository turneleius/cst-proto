'use client';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CourseList() {
  const { data, error } = useSWR('/api/courses', fetcher);

  if (error) return <div className="text-red-500">Failed to load</div>;
  if (!data) return <div className="text-gray-500">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5">
      <h1 className="text-3xl font-bold text-center mb-8">Course List</h1>
      <ul className="space-y-4">
        {data.data.map((course: any) => (
          <li
            key={course._id}
            className="p-4 bg-white rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">{course.courseCode} - {course.title}</h2>
                <p className="text-gray-700">by {course.teacher}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
