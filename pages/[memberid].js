import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getMemberById, getMembers } from "../config/memberdetails.js";

export default function MemberUpdate({ memberData }) {
  const [data, setData] = useState({
    firstName: memberData.Item.firstName,
    lastName: memberData.Item.lastName,
  });
  const router = useRouter();
  const handleInput = (event) => {
    event.preventDefault();
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const myData = { id: memberData.Item.id, ...data };
    fetch("http://localhost:3000/api/member", {
      method: "PUT",
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
      <div>MemberUpdate</div>
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
            value={data.firstName}
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
            value={data.lastName}
          />
        </div>
        <button className="btn btn-info" type="submit">
          update
        </button>
      </form>
    </>
  );
}
export async function getStaticPaths() {
  const response = await getMembers();
  const paths = response.Items.map((val) => {
    return { params: { memberid: val.id.toString() } };
  });
  return { paths, fallback: "blocking" };
}
export async function getStaticProps(context) {
  const myId = context.params.memberid;
  const response = await getMemberById(+myId);
  return { props: { memberData: response }, revalidate: 10 };
}
