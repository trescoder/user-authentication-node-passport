const UserModel = require("../schemas/user.schema");
const bcrypt = require("bcrypt");

const salt = bcrypt.genSaltSync(10);

async function createUserAccount(accountData) {
  try {
    // create a new user model to store the user account information
    const account = new UserModel();
    account.username = accountData.username;
    account.password = await bcrypt.hash(accountData.password, salt);
    await account.save();
    return { status: 200, data: account };
  } catch (error) {
    return { status: 409, data: error.message };
  }
}

module.exports = { createUserAccount };
