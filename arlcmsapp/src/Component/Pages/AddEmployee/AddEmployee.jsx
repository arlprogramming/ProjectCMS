import React from "react";

export default function AddEmployee() {
  const handleSubmit = (e) => {
    e.preventDefault();

    let firstname = e.target.firstname.value;
    let middlename = e.target.middlename.value;
    let lastname = e.target.lastname.value;

    e.target.firstname.value = "";
    e.target.lastname.value = "";
    e.target.middlename.value = "";

    console.info(firstname, middlename, lastname);
  };
  return (
    <div className="containerr">
      <form className="w-[full] max-w-lg" onSubmit={handleSubmit}>
        <div className="w-[900px] flex -mx-3 mb-6 justify-between">
          <div className="w-[full] md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
              htmlFor="firstname"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="firstname"
              type="text"
              placeholder="Jane"
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
              htmlFor="middlename"
            >
              Middle Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="middlename"
              type="text"
              placeholder="Doe"
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
              htmlFor="lastname"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="lastname"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="flex">
          <button
            className="bg-orange-500 rounded-md w-[120px] h-10 text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
