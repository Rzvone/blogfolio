import getCurrentUser from "@/app/actions/getCurrentUser"
import CreateForm from "@/components/shared/createform/CreateForm"
import Image from "next/image"






const Create = async () => {

    const user = await getCurrentUser()

  return (
    <>
        <CreateForm user={user as any} />
    </>
  )
}

export default Create