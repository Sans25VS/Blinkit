import 'dotenv/config'
import fastifySession from '@fastify/session'
import ConnectMongoDbSession from 'connect-mongodb-session'
import { Admin} from '../models'
import { Collection } from 'mongoose'

export const sessionStore = new MongoDBStore({
    uri:process.env.MONGO_URi,
    collection: "sessions",
});

sessionStore.on("error",(error) => {
    console.log("session store error",error);
});

export const authenticate = async (email,password) => {
    if(email == 'workspacesans@gmail.com' && password == '1234'){
        return Promise.resolve({email:email,password:password});
    }
    else{
        return null;
    }
};
export const PORT = process.env.PORT|| 3000;
export const COOKIE_PASSWORD = process.env.COOKIE_PASSWORD

