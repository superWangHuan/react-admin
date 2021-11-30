import { useState,useEffect } from "react"
import { connect } from "react-redux"
import { getIps } from "@/api/mointer"



const mapStateToProps = (state /*, ownProps*/) => {
    return {
      userInfo: state.user.userInfo
    };
};


function Dashboard(){

    useEffect(()=>{
        getIps().then(res=>{
            console.log(res)
        })
    },[])
    return (
        <div></div>
    )
}

export default connect(mapStateToProps,null)(Dashboard)
