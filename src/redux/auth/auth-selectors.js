const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const isRegistered = state => state.auth.isRegistered;

const authSelectors = {
    getIsLoggedIn,
    getUsername,
    isRegistered,
}

export default authSelectors;