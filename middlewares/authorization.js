
const AuthorizationMW = (allowedRoles) => {
    return async (req, res, next) => {
      let isAuthorized;
      allowedRoles.forEach(role => {
        req.role.forEach(authrole=>{
         if(authrole==role){
                isAuthorized=true
                next()
            }
        })
    });
    if(!isAuthorized){
        return res.status(401).json({msg:'Failed to access admin'})
    }
    };
};
module.exports=AuthorizationMW