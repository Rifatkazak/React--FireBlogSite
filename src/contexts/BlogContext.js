import React from 'react'
import { createContext, useState } from 'react';

export const BlogContext = createContext()

function BlogProvider({children}) {

    const [counter,setCounter] = useState(1)
    const [NewBlog,setNewBlog] = useState({id:counter, title:"", image :"", content:""});
    const initialData = [{id : 1,
        title:"React Context",
        image: "https://picsum.photos/id/217/300/300",
        content: "lorem ipsum guy hukil asdilom asdiom"},
                          { id: 2,
                            title:"React Redux",
                            image: "https://picsum.photos/id/89/300/300",
                            content: "lorem ipsum guy hukil asdilom asdiom asdasd oasodijuybads"}]

    const [data,setData] = useState(initialData)
    const [details,setDetails] = useState({})
    const [update, setUpdate] = useState({})
    
    const getDetails = (id) =>{
        const filtered = data.filter((item) =>{
            if (item.id === id){
                return setDetails(item)
            };
        })
    }

    const deleteCard = (id) => {
        const deleted = data.filter((item) =>{
            return item.id !== id
        })
        setData(deleted)
    } 

    const updateBlog = (id => {
        const update = data.filter((item) => {
            if (item.id === id) {
                return setUpdate(item)
            }
        })
    })
    console.log(details)
  
    
    const values = {NewBlog, setNewBlog, data, setData,counter, setCounter, getDetails, details, setDetails, deleteCard, updateBlog, update, setUpdate}

    return (
        <BlogContext.Provider value = {values}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogProvider;