import Add from "../pages/Add";
import Detail from "../pages/Detail";
import Edit from "../pages/Edit";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";

export const ROUTES=[{
    path:'/', 
    element:<MainRoot/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/hello',
            element:<Home/>
        }, {
            path:'/add',
            element:<Add/>
        },
        {
            path:'/hello/:id',
            element:<Detail/>
        },
         {
           path:'/hello/edit/:id' ,
           element:<Edit/>
        },{
            path:'*',
            element:<MainRoot/>
        }
    ]
}]