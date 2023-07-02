const userRepository = require('../repository/userRepository')
const User = require('../domain/user')

// const login = async(req,res)=>{
//     const user = req.body
//     const exist = await userRepository.getUser(user)
//     if(exist){
//         return 
//     }
//     await userRepository.save(user)
// }

const signup = async(req,res)=>{
    const user = new User(req.body.name,req.body.password,req.body.age)
    const exist = await userRepository.getUser(user)
    if(exist){
        return ("exist")
    }
    await userRepository.save(user)
}

module.exports = {
    // login,
    signup
}