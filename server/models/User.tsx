// models/User.ts
import { Db, Collection } from 'mongodb';

// Define a TypeScript interface representing a user document
interface User {
  _id: string; // MongoDB ObjectId
  username: string;
  email: string;
  createdAt: Date;
}

// Export the User interface
export default User;

// Function to get the users collection from the database
export async function getUsersCollection(db: Db): Promise<Collection<User>> {
  return db.collection<User>('users');
}