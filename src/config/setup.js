import { AdminJs } from "adminjs";
import * as AdminJsMongoose from '@adminjs/mongoose'
import * as Models from '../models/index,js'
import{AdminJsFastify} from "@adminjs/fastify"
AdminJs.registerAdapter(AdminJsMongoose)

export const admin = new AdminJS({
    resources:[{
        resource:Models.Customer,
        options:{
            listproperties:["phone","role","isActivated"],
            filterproperties:["phone","role"]
        }
    },{
        resource: Models.DeliveryPartner,
        options:{
            listproperties:["email","role","isActivated"],
            filterproperties:["email","role"]
        }
    },{
        resource: Models.Admin,
        options:{
            listproperties:["email","role","isActivated"],
            filterproperties:["email","role"]
        }
    },{
        resources: Models.branch
    },
    ],

    branding:{
        CompanyName:"Blinkit",
        withMadeLove : false,
    },
    rootPath:"/admin",
});
export const buildAdminRouter = async(app)=>{
    await AdminJsFastify.buildAuthenticateRouter(
        admin,{

        },
        app,
    {
        store:session
    }
    );
}