export function authMiddleware(request, response, next){
    console.log(request.session);
    if(request.session.user){
        next();
    } else {
        response.redirect('/login');
    }
}