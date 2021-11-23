import React,{Component} from "react"
import { withRouter, Link } from "react-router-dom"
import { connect } from "react-redux"
import { Tag } from 'antd';
import { delCloseMenuTag } from "@/store/actions/menu";
import "./index.scss"


class TagsView extends Component{
    render(){
        const { openMenuTags=[] } = this.props;
        return (
            <div className="tags-view flex row">
                { openMenuTags.map( item=>(
                    <div key={item.key} style={{marginLeft:"5px"}}>
                        <Tag  closable={openMenuTags.length>1} onClose={ ()=>{this.closeTag(item)} } ><Link to={item.path}>{item.title}</Link></Tag>
                    </div>
                ) ) }
            </div>
        )
    }
    //关闭tag
    closeTag=(item)=>{
        const { openMenuTags=[],history } = this.props;
        if(openMenuTags.length > 1){
            let key = item.key;
            console.log(key)
            let index = openMenuTags.findIndex(item => {
                return item.key === key
            })
            this.props.delCloseMenuTag(key)
            if(index > 0){
                history.replace(openMenuTags[index-1].path)
            }else{
                history.replace(openMenuTags[1].path)
            }
        }
        console.log(openMenuTags)
    }
}
const mapStateToProps = state => ({
    openMenuTags:state.menus.openMenuTags
})
const mapDispatchTopProps = (dispatch)=>({
    delCloseMenuTag:(key)=>dispatch(delCloseMenuTag(key))
})


export default connect(mapStateToProps,mapDispatchTopProps)(withRouter(TagsView))
