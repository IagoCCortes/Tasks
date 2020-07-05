import Frequency from '../models/frequency';
import mongoose from 'mongoose';
import config from '../config';

export default async () => {
  const connection = await mongoose.connect(config.databaseURL, { useNewUrlParser: true, useCreateIndex: true });
  await connection.connection.db.listCollections({ name: 'frequencies' }).next(async function (err, collinfo) {
    if (!collinfo) {
      const frequencies = [
        new Frequency({
          name: 'hourly',
        }),
        new Frequency({
          name: 'daily',
        }),
        new Frequency({
          name: 'weekly',
        }),
        new Frequency({
          name: 'monthly',
        }),
        new Frequency({
          name: 'yearly',
        }),
      ];

      //save your data. this is an async operation
      //after you make sure you seeded all the products, disconnect automatically
      frequencies.map(async (p, index) => {
        await p.save((err, result) => {
          if (index === frequencies.length - 1) {
            mongoose.disconnect();
          }
        });
      });
    }
  });
};
