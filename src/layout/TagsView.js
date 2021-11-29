import React,{Component} from "react"
import { withRouter, Link } from "react-router-dom"
import { connect } from "react-redux"
import {Breadcrumb, Tag} from 'antd';
import { delCloseMenuTag } from "@/store/actions/menu";
import "./index.scss"


class TagsView extends Component{
    render(){
        const { openMenuTags=[],selectMenu,breadcrumb=[] } = this.props;
        return (
            <div className={"container"}>
                {
                    breadcrumb.length !== 0 ? (<div className={"Breadcrumb"}>
                        <Breadcrumb separator=">">
                            {breadcrumb.map(item => (
                                <Breadcrumb.Item key={item.key}>{item.title}</Breadcrumb.Item>
                            ))}
                        </Breadcrumb>
                    </div>):null
                }
                <div className="tags-view flex row">
                    { openMenuTags.map( item=>(
                        <div key={item.key} style={{marginLeft:"5px"}}>
                            <Tag  color={selectMenu.key===item.key ? "#108ee9" : ""}  closable={openMenuTags.length>1} onClose={ ()=>{this.closeTag(item)} } ><Link to={item.path}>{item.title}</Link></Tag>
                        </div>
                    ) ) }
                </div>
            </div>

        )
    }
    //关闭tag
    closeTag=(e)=>{
        const { openMenuTags=[],history,selectMenu,delCloseMenuTag } = this.props;
        if(openMenuTags.length > 1){
            let key = e.key;
            let index = openMenuTags.findIndex(item => {
                return item.key === key
            })
            delCloseMenuTag(key)
            if(selectMenu.key===openMenuTags[index].key){
                if(index === 0){
                    history.replace(openMenuTags[1].path)
                }else if(index>0){
                    history.replace(openMenuTags[index - 1].path)
                }
            }
        }
    }
}
const mapStateToProps = state => ({
    openMenuTags:state.menus.openMenuTags,
    selectMenu: state.menus.selectMenu,
    breadcrumb:state.menus.breadcrumb
})
const mapDispatchTopProps = (dispatch)=>({
    delCloseMenuTag:(key)=>dispatch(delCloseMenuTag(key))
})


export default connect(mapStateToProps,mapDispatchTopProps)(withRouter(TagsView))
