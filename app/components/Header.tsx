export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-red-500">Tumeco</span> Wildlife
        </h1>
        <p className="text-center text-gray-500">
          A Wildlife App built with React, Next.js, and Tailwind CSS
        </p>
      </div>
    </div>
  );
}
