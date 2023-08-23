import prismadb from '@/lib/prismadb';


const getUser = async(email: string) => {

    const user = await prismadb.user.findUnique({
        where: {
            email
        }
    });

    return user;
}

export default getUser;