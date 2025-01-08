 const adminAuth = (req, res, next) => {
    // admin auth is getting checked here
    console.log('admin auth is getting checked')
    const token = 'xyz';
    const isAdminAuthorized = token === 'xyz';
    if(!isAdminAuthorized) {
        res.status(401).send('Unauthorized');
    } else {
        next();
    }
    
};

const userAuth = (req, res, next) => {
    // admin auth is getting checked here
    console.log('user auth is getting checked')
    const token = 'xyzsd';
    const isAdminAuthorized = token === 'xyz';
    if(!isAdminAuthorized) {
        res.status(401).send('Unauthorized');
    } else {
        next();
    }
    
};

module.exports = { adminAuth, userAuth}