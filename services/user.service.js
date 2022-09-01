const UserModel = require("../schemas/user.schema");
const { hashPassword } = require("../config/password.manager");

async function getUser(username) {
  try {
    return UserModel.findOne({ username });
  } catch (error) {
    return null;
  }
}

async function createUserAccount(accountData) {
  try {
    // create a new user model to store the user account information
    const account = new UserModel();
    account.username = accountData.username;
    account.password = await hashPassword(accountData.password);
    await account.save();
    return { status: 200, data: account };
  } catch (error) {
    return { status: 409, data: error.message };
  }
}

module.exports = { createUserAccount, getUser };
