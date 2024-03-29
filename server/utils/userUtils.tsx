// server/utils/userUtils.ts
import { Db, Collection } from 'mongodb';
import User, { getUsersCollection } from '../models/User';

export async function createUser(db: Db, username: string, email: string): Promise<void> {
  const usersCollection = db.collection<User>('users');
  const newUser: User = {
    _id: '', // MongoDB will automatically generate an ObjectId
    username,
    email,
    createdAt: new Date(),
  };
  await usersCollection.insertOne(newUser);
}

export async function findUserById(db: Db, userId: string): Promise<User | null> {
  const usersCollection = await getUsersCollection(db);
  return usersCollection.findOne({ _id: userId });
}

export async function updateUser(db: Db, userId: string, updates: Partial<User>): Promise<void> {
  const usersCollection = await getUsersCollection(db);
  await usersCollection.updateOne({ _id: userId }, { $set: updates });
}

export async function deleteUser(db: Db, userId: string): Promise<void> {
  const usersCollection = await getUsersCollection(db);
  await usersCollection.deleteOne({ _id: userId });
}