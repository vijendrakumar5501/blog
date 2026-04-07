

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

        if(emailRegex.test(email)){
            return res.status()
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Failed to register'
        })

    }
}