import React from "react";

interface Student {
  name: string;
  position: string;
  id: string;
}

export default function Staff() {
  const students: Student[] = [
    { name: "Heaven", position: "Developer", id: "B081020008" },
    { name: "Steven", position: "Copywriter", id: "B081020020" },
    { name: "Wayne", position: "Copywriter", id: "B081020037" },
    { name: "Roger", position: "Designer", id: "B081020041" },
  ];
  return (
    <main className="flex flex-col justify-start items-center min-h-screen pt-40 gap-11 md:px-16 md:gap-16 mb-10">
      <h1 className="uppercase tracking-widest font-black text-red-600 text-3xl md:text-5xl">
        staff
      </h1>
      <div className="flex flex-col items-center justify-center w-full gap-8 md:gap-10 px-10">
        {students.map((student, i) => {
          return (
            <div
              key={i}
              className="inline-grid grid-cols-5 letter md:text-3xl w-full text-center sm:text-2xl text-md"
            >
              <div className="lg:col-start-2 lg:col-end-2 col-start-1 col-end-3 text-left font-black underline underline-offset-4 uppercase">
                {student.position}
              </div>
              <div className="col-start-3 col-end-3 sm:text-center text-left uppercase font-bold">
                <p>{student.name}</p>
              </div>
              <div className="lg:col-start-4 lg:col-end-4 col-start-4 col-end-6 text-right">
                {student.id}
              </div>
              <hr className="lg:col-start-2 col-start-1 lg:col-end-5 col-end-6 h-4 border-t-4 border-dotted border-red-600 mt-4 md:mt-6" />
            </div>
          );
        })}
      </div>
    </main>
  );
}
