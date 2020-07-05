import Type from '../models/type';
import mongoose from 'mongoose';
import config from '../config';

export default async () => {
  const connection = await mongoose.connect(config.databaseURL, { useNewUrlParser: true, useCreateIndex: true });
  await connection.connection.db.listCollections({ name: 'types' }).next(async function (err, collinfo) {
    if (!collinfo) {
      const types = [
        new Type({
          name: 'timed',
        }),
        new Type({
          name: 'quantity',
        }),
        new Type({
          name: 'problem',
        }),
        new Type({
          name: 'routine',
        }),
        new Type({
          name: 'project',
        }),
        new Type({
          name: 'organization',
        }),
        new Type({
          name: 'relaxation',
        }),
        new Type({
          name: 'physical',
        }),
      ];

      //save your data. this is an async operation
      //after you make sure you seeded all the products, disconnect automatically
      types.map(async (p, index) => {
        await p.save((err, result) => {
          if (index === types.length - 1) {
            mongoose.disconnect();
          }
        });
      });
    }
  });
};
