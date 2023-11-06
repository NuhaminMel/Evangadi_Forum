import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

function AskQuestion() {
  const [userData, setUserData] = useContext(UserContext);
  const [form, setForm] = useState({});
  const navigate = useNavigate();
console.log(form);

  useEffect(() => {
    if (!userData.user) navigate("/login");
  }, [userData.user, navigate]);

  //importing global state from context
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setForm(() => {
    //   return { ...form, userId: userData.user.id };
    // });
    try {
      await axios.post("http://localhost:9500/api/questions/", {
        question: form.question,
        question_description: form.question_description,
        user_id: userData.user_id,
      });

      navigate("/");
    } catch (error) {
      console.error("Error submitting the question", error);
    }
  };
  return (
    <div>
      <div className="w-9/12 m-auto my-10 ">
        <div className="flex justify-around my-10">
          <div>
            <p className="text-2xl font-medium mx-5 my-2">
              Steps to write a good question
            </p>
            <ul>
              <li className="list-disc">
                Summerize your problem in a one-line title.
              </li>
              <li className="list-disc">
                Describe your problem in mode detail.
              </li>
              <li className="list-disc">
                Describe what you tried and what you expected to happen.
              </li>
              <li className="list-disc">
                {" "}
                Review your question and post it to the site.
              </li>
            </ul>
          </div>
        </div>
        <div className=" mx-auto mt-8 p-6 bg-white rounded shadow-md text-center">
          <h1 className="text-2xl font-semibold mb-2">Ask a Question</h1>
          <Link to={"/all-questions"}>
            <p className="mb-2 text-xs font-semibold hover:text-orange-500">
              Go to Question page
            </p>
          </Link>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="question"
                name="question"
                placeholder="Title"
                // value={form.question}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <textarea
               
                name="questionDescription"
                placeholder="Question Description"
                // value={formInput.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline resize-none h-32"
              />
            </div>
            <button
              type="submit"
              className="py-2 flex left-0 text-sm cursor-pointer px-10 md:px-20 mx-3 bg-blue-600 rounded text-white"
            >
              Ask Question
            </button>
          </form>
        </div>
      </div>
    </div>
    // <div className="flex justify-center items-center h-screen">
    //   <div className="bg-white p-8 rounded-lg shadow-lg">
    //     <div className="mb-4">
    //       <h3 className="text-lg font-medium text-center">
    //         Steps to Write a Good Question
    //       </h3>
    //       <ul className="list-disc list-inside ps-20 text-[13px] pb-12">
    //         <li>Summarize in a one-line title</li>
    //         <li>Describe in more detail</li>
    //         <li>Describe what you expect to happen</li>
    //         <li>Review your question and post</li>
    //       </ul>
    //     </div>
    //     <div className="mb-4">
    //       <h3 className="text-lg font-medium text-center">
    //         Ask a public Question
    //       </h3>
    //       <Link to="/" className="ms-40 md:ms-56 text-xs">
    //         Go to question page
    //       </Link>
    //     </div>
    //     <div>
    //       <form onSubmit={handleSubmit}>
    //         <input
    //           name="question"
    //           type="text"
    //           className="w-full p-2 border border-gray-300 rounded mb-4"
    //           placeholder="Title"
    //           onChange={handleChange}
    //         />
    //         <textarea
    //           name="questionDescription"
    //           placeholder="Question Description"
    //           onChange={handleChange}
    //           className="w-full p-2 border border-gray-300 rounded mb-4 resize-none h-32"
    //         ></textarea>
    //         <button
    //           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    //           type="submit"
    //         >
    //           Post Your Question
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
}

export default AskQuestion;
