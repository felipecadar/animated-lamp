import { getSession } from 'next-auth/client'
import connectDatabase from "../../src/database/database";
import User from "../../src/database/schemas/user";

export default async (req, res) => {
    if (req.method === 'GET') {
        const session = await getSession({ req })
        if(session?.user && session.fullUser.isAdmin){
            connectDatabase();
            const query = await User.find({}).where("isAdmin",false);

            res.status(200).json(query)

        }else{
            res.status(401).json({ error: "Unauthorized" })
        }

    } else {
        res.status(400).json({ error: "Invalid Request" })
    }
}
