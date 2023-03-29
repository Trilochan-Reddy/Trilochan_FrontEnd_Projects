import "./index.css"
import BlogItem from "../BlogItem/index"

import { Component } from "react"
import Loader from  "react-loader-spinner"
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component{
    state={
        blogsData:[],
        isLoading:true
    }

    componentDidMount(){
        this.getDataFromApiCall()
    }

    getDataFromApiCall=async ()=>{
        const response=await fetch("https://apis.ccbp.in/blogs")
        const data=await response.json()
        const updatedData=data.map(eachData=>(
            {
                id: eachData.id,
                title: eachData.title,
                imageUrl:eachData.image_url,
                avatarUrl:eachData.avatar_url,
                author:eachData.author,
                topic:eachData.topic
            }
        ))

        this.setState({
            blogsData:updatedData,
            isLoading:false
        })
    }
    render(){
        const{blogsData,isLoading}=this.state
        
        return (
            <div className="bloglist-data-container">
        <ul className="ul-container">
        {
            isLoading ? <Loader type="TailSpin" color="#00BFFF" height={50} width={50} /> :      
            blogsData.map(eachItem=>{
                return (
                    <BlogItem eachItem={eachItem} key={eachItem.id}/>
                )
            })
        }
        </ul>
    </div>
        )

    }
}



export default BlogList;