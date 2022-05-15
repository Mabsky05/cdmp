const db = require('../config/connection');
const { User, Pin } = require('../models');
const userSeeds = require('./userSeeds.json');
const pinSeeds = require('./pinSeeds.json');

db.once('open', async () => {
  try {
    await Pin.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < pinSeeds.length; i++) {
      const { _id, username } = await Pin.create(pinSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: username },
        {
          $addToSet: {
            pins: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
