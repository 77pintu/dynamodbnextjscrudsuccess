import { getMemberById, getMembers } from "../../config/memberdetails.js";
export default function MemberDetailsPage({ memberData }) {
  return (
    <>
      <div className="text-center my-5">
        <h5>Member Details</h5>
        <p>
          my name is {memberData.Item.firstName} and Last name is
          {memberData.Item.lastName}
        </p>
      </div>
    </>
  );
}
export async function getStaticPaths() {
  const response = await getMembers();
  const paths = response.Items.map((val) => {
    return { params: { id: val.id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const myId = context.params.id;
  const response = await getMemberById(+myId);
  return {
    props: { memberData: response },
  };
}
