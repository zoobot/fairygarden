let Sequelize = require('sequelize')

let db = new Sequelize('fairygarden', 'fairygarden','fairies')

var User = db.define('user', {
  username: { type: Sequelize.STRING, field: 'username', unique: 'username' },
    password: Sequelize.STRING,
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  age: Sequelize.INTEGER,
  title: Sequelize.STRING
})

var Door = db.define('door', {
  longitude: Sequelize.INTEGER,
  latitude: Sequelize.INTEGER,
  streetnumber: Sequelize.INTEGER,
  streetname: Sequelize.STRING,
  city: Sequelize.STRING,
  country: Sequelize.STRING,
  zipcode: Sequelize.INTEGER,
  link: Sequelize.STRING,
  icon: Sequelize.STRING,
  likenumber: Sequelize.INTEGER,
  creator: Sequelize.STRING,
  notes: Sequelize.STRING,
})

var FairyGarden = db.define('fairygarden', {
  longitude: Sequelize.INTEGER,
  latitude: Sequelize.INTEGER,
  streetnumber: Sequelize.INTEGER,
  streetname: Sequelize.STRING,
  city: Sequelize.STRING,
  country: Sequelize.STRING,
  zipcode: Sequelize.INTEGER,
  link: Sequelize.STRING,
  icon: Sequelize.STRING,
  likenumber: Sequelize.INTEGER,
  creator: Sequelize.STRING,
  notes: Sequelize.STRING,
})

var UsersFairyGardenLikes = db.define('usersfairygardenlikes', {});
var UsersFairyDoorLikes = db.define('usersfairydoorlikes', {});
var UsersFairyGardenCreator = db.define('usersfairygardencreator', {});
var UsersFairyDoorCreator = db.define('usersfairydoorcreator', {});

//foreign keys
FairyGarden.belongsTo(Door);
FairyGarden.belongsTo(User);
Door.belongsTo(FairyGarden);
Door.belongsTo(User);
//creates an invisible UsersTests table
//This will add methods getUsers, setUsers, addUsers to Test, and getTests, setTests and addTest to User.
User.belongsToMany(FairyGarden, {through: UsersFairyGardenLikes});
User.belongsToMany(Door, {through: UsersFairyDoorLikes});
User.belongsToMany(FairyGarden, {through: UsersFairyGardenCreator});
User.belongsToMany(Door, {through: UsersFairyDoorCreator});

User.sync()
  .then(function(err) {
    console.log('Created Users Table!');
  }, function (err) {
    console.log('An error occurred while creating the Users table:', err);
  });

FairyGarden.sync();
Door.sync();
UsersFairyDoors.sync();
UsersFairyGardens.sync();

exports.User = User;
exports.FairyGarden = FairyGarden;
exports.Door = Door;
exports.UsersFairyDoorLikes = UsersFairyDoorLikes;
exports.UsersFairyGardenLikes = UsersFairyGardenLikes;