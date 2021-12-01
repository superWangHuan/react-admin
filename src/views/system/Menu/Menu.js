import { useEffect } from "react";
import { Table,Button  } from 'antd';
import { connect } from "react-redux";
import Icon from "@/components/Icon/Icon";


const { Column } = Table;
const mapStateToProps = state=>({
    menus:state.menus.menuList
})

function Menu({ menus }){
    useEffect(()=>{

    },[menus])
    return (
        <Table dataSource={menus} style={{padding:"20px 0"}}  rowKey={ record => record.menu_id }>
            <Column align={"center"} title={"菜单id"} key={"menu_id"} dataIndex={"menu_id"}/>
            <Column align={"center"} title={"名称"} key={"menu_id"} dataIndex={"title"}/>
            <Column align={"center"} title={"路由"} key={"menu_id"} dataIndex={"path"}/>
            <Column align={"center"} title={"菜单唯一key"} key={"menu_id"} dataIndex={"key"}/>
            <Column align={"center"} title={"菜单图标"} key={"menu_id"} dataIndex={"icon"}
                render={ col=>(<Icon type={ col } style={{fontSize:"20px"}}/>) }
            />
            <Column align={"center"} title={"是否显示"} key={"menu_id"} dataIndex={"visible"}
                    render={ col=>(<span style={{fontSize:"14px"}}>{col ? "显示":"隐藏"}</span>) }
            />
            <Column align={"center"} title={"是否缓存"} key={"menu_id"} dataIndex={"keepAlive"}
                    render={ keepAlive=>(<span style={{fontSize:"14px"}}>{keepAlive ? "缓存":"不缓存"}</span>) }
            />
            <Column align={"center"} title={"菜单排序"} key={"menu_id"} dataIndex={"order"}/>
            <Column align={"center"} title={"操作"} key={"menu_id"} render={ col=>( <>
                <Button type="primary" style={{marginRight:"5px",fontSize:"12px"}} size={ "small" }>编辑</Button>
                <Button type="danger" style={{marginRight:"5px",fontSize:"12px"}} size={ "small" }>删除</Button>
            </> ) }/>
        </Table>
    )
}
export default connect(mapStateToProps,null)(Menu)
