// Check if user is logged in
export const isLoggedIn = () => localStorage.getItem('user') ? true : false;

// Login user by storing user data
export const login = (user) => localStorage.setItem('user', JSON.stringify(user));

// Logout user by removing all user data
export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('meetings');
}