const createUser = (password,name,email)=>{
    return{
        password,name,email
    }
}

module.exports = {
    createUser
}