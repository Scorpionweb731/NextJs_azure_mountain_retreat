import SingleRoom from "@/app/components/SingleRoom";

const page = ({params}) => {
    return(
    <>
    <SingleRoom roomid={params.id} />
    </>)
}
export default page;