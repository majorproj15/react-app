import React from 'react';
import { NavLink } from 'react-router-dom';


export default class LeftCard extends React.Component {
    constructor(props) {
        super(props);
      }
    getNavLinkClass = (path) => {
        return  'nav-item';
    }

    onSlectedItem(event, id){
        this.selectedItem = id;   
        debugger;     
    }
    

    render(){    
        let selectedItem = 'dashboard';
        const appRoutes = [
            {
                title: 'Dashboard',
                path: '/',
                active: true,
                id: 'dashboard',
                children: null
            },
            {
                title: 'Configuration',
                path: '/configuration',
                active: false,
                id: 'configuration',
                children: [
                    {
                        title: 'Properties',
                        path: '/properties'
                    },
                    {
                        title: 'ANI',
                        path: '/ani'
                    },
                    {
                        title: 'Dnls',
                        path: '/dnls'
                    },
                    {
                        title: 'Area Code Mapping',
                        path: '/areaCodeMapping'
                    },
                    {
                        title: 'State',
                        path: '/state'
                    },
                    {
                        title: 'Region',
                        path: '/region'
                    },
                ]
            },
            {
                title: 'Values',
                path: '/values',
                active: false,
                id: 'values',
                children: [
                    {
                        title: 'Welcome Messages',
                        path: '/welcomeMessages'
                    },
                    {
                        title: 'Specific Intents',
                        path: '/specificIntents'
                    },
                    {
                        title: 'Business Types',
                        path: '/bussinesstypes'
                    },
                    {
                        title: 'Servers',
                        path: '/servers'
                    }
                ]
            },
            {
                title: 'Administration',
                path: '/administration',
                active: false,
                id: 'administration',
                children: [
                    {
                        title: 'User List',
                        path: '/userList'
                    },
                    {
                        title: 'Roles',
                        path: '/roles'
                    },
                    {
                        title: 'Changes',
                        path: '/changes'
                    }
                ]
            }
        ]
        const defaultNavClass = "nav-link align-middle px-0"
        const defaultSubNavClass = "sub-nav-link align-middle"
        
        
        return (
            <div className='h-100 bg-light-gray left-nav'>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start h-100" id="menu">
                    
                    {appRoutes.map(item => (
                        // className="nav-item"
                        
                        <li className={this.getNavLinkClass(item.path)}  key={item.title}>
                            {!item.children && (
                                <NavLink exact to={item.path} className={({ isActive }) => (isActive ? 'active ' + defaultNavClass : defaultNavClass)} onClick={(e) => {this.onSlectedItem(e, item.id)}}>
                                    <span className="ms-1 d-none d-sm-inline">{item.title}</span>
                                </NavLink>
                            )}
                            {item.children && (
                                // className={({ isActive }) => (isActive ? 'active ' + defaultNavClass : defaultNavClass)}
                                <a href={'#' + item.id} data-bs-toggle="collapse" className={` ${selectedItem === item.id ? 'active ' + defaultNavClass : defaultNavClass}`} onClick={(e) => {this.onSlectedItem(e, item.id)}}>
                                    <span className="ms-1 d-none d-sm-inline">{item.title}</span>
                                </a>
                            )}
                            {item.children && (
                                <ul className="collapse nav flex-column ms-1" id={item.id} data-bs-parent="#menu">
                                    {item.children.map(child => (
                                        <li className="w-100" key={child.title}>
                                            <NavLink exact to={item.path +child.path} className={({ isActive }) => (isActive ? 'active ' + defaultSubNavClass : defaultSubNavClass)}>
                                                <span className="ms-1 d-none d-sm-inline">{child.title}</span>
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        
                    ))}

                
                </ul>
                
            </div>
        );
    }
    
}



// const LeftCard = () => {

//     const appRoutes = [
//         {
//             title: 'Dashboard',
//             path: '/',
//             active: true,
//             children: null
//         },
//         {
//             title: 'Configuration',
//             path: '/configuration',
//             active: false,
//             children: [
//                 {
//                     title: 'Properties',
//                     path: '/properties'
//                 },
//                 {
//                     title: 'ANI',
//                     path: '/ani'
//                 },
//                 {
//                     title: 'Dnls',
//                     path: '/dnls'
//                 },
//                 {
//                     title: 'Area Code Mapping',
//                     path: '/areaCodeMapping'
//                 },
//                 {
//                     title: 'State',
//                     path: '/state'
//                 },
//                 {
//                     title: 'Region',
//                     path: '/region'
//                 },
//             ]
//         },
//         {
//             title: 'values',
//             path: '/values',
//             active: false,
//             children: [
//                 {
//                     title: 'Welcome Messages',
//                     path: '/welcomeMessages'
//                 },
//                 {
//                     title: 'Specific Intents',
//                     path: '/specificIntents'
//                 },
//                 {
//                     title: 'Business Types',
//                     path: '/bussinesstypes'
//                 },
//                 {
//                     title: 'Servers',
//                     path: '/servers'
//                 }
//             ]
//         },
//         {
//             title: 'Administration',
//             path: '/administration',
//             active: false,
//             children: [
//                 {
//                     title: 'User List',
//                     path: '/userList'
//                 },
//                 {
//                     title: 'Roles',
//                     path: '/roles'
//                 },
//                 {
//                     title: 'Changes',
//                     path: '/changes'
//                 }
//             ]
//         }
//     ]
//     const defaultNavClass = "nav-link align-middle px-0"
//     const defaultSubNavClass = "sub-nav-link align-middle"

//     return (
        
//         <div className='h-100 bg-light-gray left-nav'>
        
//             <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start h-100" id="menu">
                
//                 {appRoutes.map(item => (
//                     <li className="nav-item" key={item.title}>
//                         <NavLink exact to={item.path} className={({ isActive }) => (isActive ? 'active ' + defaultNavClass : defaultNavClass)}>
//                             <span className="ms-1 d-none d-sm-inline">{item.title}</span>
//                         </NavLink>
//                         {item.children && (
//                             <ul className=" nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
//                                 {item.children.map(child => (
//                                     <li className="w-100" key={child.title}>
//                                         <NavLink exact to={item.path +child.path} className={({ isActive }) => (isActive ? 'active ' + defaultSubNavClass : defaultSubNavClass)}>
//                                             <span className="ms-1 d-none d-sm-inline">{child.title}</span>
//                                         </NavLink>
//                                     </li>
//                                 ))}
//                             </ul>
//                         )}
//                     </li>
                    
//                 ))}

            
//             </ul>
            
//         </div>
// )
//     };

// export default LeftCard;