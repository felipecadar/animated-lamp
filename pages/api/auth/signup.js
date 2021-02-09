import User from "../../../src/database/schemas/user";
import connectDatabase from "../../../src/database/database";

connectDatabase()

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, password } = req.body;

        const foundUser = await User.findOne({ email });
        if (foundUser) {
            res.status(403).json({ error: "Email já está em uso", code: 100 })
            return
        }

        const image = `https://avatars.dicebear.com/4.5/api/gridy/${email}.svg`;
        const newUser = new User({
            name,
            email,
            image,
            password,
        })

        await newUser.save();

        res.status(200).json({ status: "ok" })
    } else {
        res.status(400).json({ error: "Invalid Request" })
    }
}
