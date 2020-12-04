import React from "react"
import { NavLink } from "react-router-dom"
import userPhoto from '../../img/logo.png'
import { UserType } from "../../redux/store"
import styles from './Users.module.css'

type UsersPropsType={
    users:Array<UserType>
    totalUsersCount:number
  // isFetching:boolean
    pageSize:number
    currentPage:number
    //pageNumber:number

    //getUsers: (currentPage:number,pageSize:number)=>void
   // followingInProgress:Array<number>
    unfollow:(userId:number)=>void
    follow:(userId:number)=>void
    onPageChanged:(pageNumber: number)=>void
}

let Users = (props:UsersPropsType)=> {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages=[]

    for(let i=1; i<=pagesCount; i++){
        pages.push(i)
}
debugger
    return   <div>
              <div>
        {
            
        pages.map((p:any,index) => <span key={p.index} className={(props.currentPage === p)? styles.selected:""}
                            onClick={(e)=>{
                                props.onPageChanged(p)
                            }}>{p}</span> 
            )
      }
      </div>
     { 
        props.users.map((u:UserType) => <div key={u.id}>
                <div>
                    <div>
                        <NavLink to={"/profile/"+u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}>фото</img>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { 
                                props.unfollow(u.id)
                            }}>UnFollow</button>
                            : <button onClick={() => { 
                                
                                props.follow(u.id) 
                            }}>Follow</button>}

                    </div>
                </div>
                <div>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                         <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div> 
                    </span>
                </div>
            </div>
            
            )
        }
       
    </div>
}
 export default Users;