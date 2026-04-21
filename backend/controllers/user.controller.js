import { User } from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const register = async (req, res) => {


    try {
        const { firstName, lastName, email, password } = req.body;
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All Field Required"
            })
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "invalid message"
            })
        }
        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "password must be ateat 6 charcter"
            });



        }

        const existEmail = await User.findOne({ email });

        if (existEmail) {
            return res.status(400).json({
                success: false,
                message: 'email alredy exist'
            });
        }

        const encryptPass = await bcrypt.hash(password, 10)

        await User.create({
            firstName, lastName, email,
            password: encryptPass
        });

        return res.status(201).json({
            success: true,
            message: 'account create succefully'
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Failed to register'
        })

    }
}

// login

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "all field required"
            })
        }
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'incorrect email '
            })
        }

        let isPassValid = await bcrypt.compare(password, user.password);

        if (!isPassValid) {
            return res.status(400).json({
                success: false,
                message: 'incorrect email or  password'
            });
        }


        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "1d" })

        return res
            .status(200)
            .cookie("token", token, {
                maxAge: 1 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                sameSite: "strict"
            })
            .json({
                success: true,
                message: `Welcome back ${user}`
            });




    }


    catch (error) {
        console.log(error)
    }
}

// logout

export const logout = async (req, res) => {
    return res.status(200).cookie('token', "", { maxAge: 0 }).json({
        success: true,
        message: 'logout succefully'
    })

}

