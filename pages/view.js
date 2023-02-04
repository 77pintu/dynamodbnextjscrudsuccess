import { useRouter } from "next/router";
import React from "react";
import MemberDetails from "../component/MemberDetails.js";
import { getMembers } from "../config/memberdetails.js";

export default function View({ data }) {
  const router = useRouter();
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete")) {
      fetch("http://localhost:3000/api/member", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      })
        .then((res) => {
          if (res) {
            router.replace("/view");
          }
        })
        .catch((err) =>
          alert("can't able to delete Kindly try it some time later")
        );
    }
  };
  return (
    <>
      <button
        className="btn btn-secondary my-2 mx-3"
        onClick={() => router.push("/add")}
      >
        Add
      </button>
      {data.Items.map((item) => {
        return (
          <MemberDetails
            handleDelete={handleDelete}
            key={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            memberId={item.id}
          />
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  // first way
  // const response = await fetch("http://localhost:3000/api/member");
  // const data = await response.json();

  // second way
  const response = await getMembers();
  // console.log("🚀 ~ file: view.js:51 ~ getStaticProps ~ response2", response2);

  return {
    props: {
      data: response,
    },
    revalidate: 1,
  };
}
