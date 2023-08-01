import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if(!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  return (
    <>
     <h1 className="text-2xl text-green-500">My Movie App</h1>
     <button className="h-10 w-20 bg-white" onClick={() => signOut()}>
      LogOut 
     </button>
    </>
  )
}
