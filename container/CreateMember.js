import { useState } from "react";
import { useRouter } from "next/router";
function CreateMember() {
  const [data, setData] = useState({});
  const router = useRouter();
  const handleInput = (event) => {
    event.preventDefault();
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const myData = { id: Math.floor(Math.random() * 10000), ...data };
    fetch("https://vercel.com/77pintu/myappfirst/api/member", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myData),
    })
      .then((res) => {
        if (res) {
          router.replace("/view");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h5 className="text-center my-5">Create Member</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            FirstName
          </label>
          <input
            name="firstName"
            type="text"
            className="form-control"
            id="firstName"
            onChange={handleInput}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            LastName
          </label>
          <input
            name="lastName"
            type="text"
            className="form-control"
            id="firstName"
            onChange={handleInput}
            required
          />
        </div>
        <button className="btn btn-info" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
export { CreateMember };
