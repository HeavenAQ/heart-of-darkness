import React from "react";

interface Student {
  name: string;
  position: string;
  id: string;
}

export default function Staff() {
  const students: Student[] = [
    { name: "Heaven", position: "Web Developer", id: "B081020008" },
    { name: "Steven", position: "position", id: "B000000000" },
    { name: "Wayne", position: "position", id: "B000000010" },
    { name: "Roger", position: "position", id: "B000000020" },
  ];
  return (
    <main className="flex flex-col justify-start items-center min-h-screen pt-40 gap-11 md:px-16 md:gap-16 ">
      <h1 className="uppercase tracking-widest font-black text-red-600 text-4xl md:text-5xl">
        staff
      </h1>
      <div className="flex flex-col items-center justify-center w-full gap-10 px-10">
        {students.map((student, i) => {
          return (
            <div
              key={i}
              className="inline-grid grid-cols-5 text-white letter md:text-3xl w-full text-center text-2xl"
            >
              <div className="lg:col-start-2 lg:col-end-2 col-start-1 col-end-3 text-left md:pl-0">
                {student.position}
              </div>
              <div className="col-start-3 col-end-3">{student.name}</div>
              <div className="lg:col-start-4 lg:col-end-4 col-start-4 col-end-6 text-right mb-10">
                <p>{student.id}</p>
              </div>
              {i !== students.length - 1 && (
                <hr className="lg:col-start-2 col-start-1 lg:col-end-5 col-end-6 h-4 border-t-4 border-dotted border-red-600" />
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
