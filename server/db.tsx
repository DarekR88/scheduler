import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://darekradke2:LV2e8in2NrhiMEhB@cluster0.vpqr4p0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export async function connectDatabase(): Promise<MongoClient> {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return client;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}