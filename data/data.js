let users = [];
let currentId = 1;

module.exports = {

  addUser: (user) => {
    user.id = currentId++;
    users.push(user);
  },

  getUsers: () => users,

  getUserById: (id) => users.find(u => u.id === id),

  updateUser: (id, updateData) => {
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updateData };
      return users[userIndex];
    }
    return null;
  },

  deleteUser: (id) => {
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      return true;
    }
    return false;
  },
};
