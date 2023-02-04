import React from "react";
import { useRouter } from "next/router";
export default function MemberDetails({
  firstName,
  lastName,
  handleDelete,
  memberId,
}) {
  const router = useRouter();
  return (
    <>
      <p>
        My FirstName is {firstName} and lastName name is {lastName}
        <button
          className="btn btn-info btn-sm mx-3"
          onClick={() => handleDelete(memberId)}
        >
          Delete
        </button>
        <button
          className="btn btn-secondary btn-sm mx-2"
          onClick={() => router.push(`/${memberId}`)}
        >
          Edit
        </button>
        <button
          className="btn btn-warning btn-sm"
          onClick={() => router.push(`/member/${memberId}`)}
        >
          Details
        </button>
      </p>
    </>
  );
}
