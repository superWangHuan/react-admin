import { useEffect,useState } from "react";
import { getAllUser } from "@/api/system";
import { Table,Button  } from 'antd';
import Avatar from "antd/es/avatar/avatar";
const { Column } = Table;
export default function User(){
    const [data,setData] = useState([])
    useEffect(()=>{
        getAllUser().then(res=>{
            setData(res.data.data)
        })
    },[])
    return (
        <Table dataSource={ data } style={{padding:"20px 0"}}  rowKey={ record => record.id }>
            <Column align={"center"} title={"id"} key={"id"} dataIndex={"id"}/>
            <Column align={"center"} title={"头像"} key={"id"} dataIndex={"avatar"} render={avatar => (
                <Avatar shape="square" size={64} src={avatar} />
            )}/>
            <Column align={"center"} title={"账号"} key={"id"} dataIndex={"username"}/>
            <Column align={"center"} title={"密码"} key={"id"} dataIndex={"password"}/>
            <Column align={"center"} title={"权限"} key={"id"} dataIndex={"roles"} render={ roles=>(
                <span>{ roles.name }</span>
            ) }/>
            <Column align={"center"} title={"操作"} key={"id"} render={ col=>( <>
                <Button type="primary" style={{marginRight:"5px",fontSize:"12px"}} size={ "small" }>编辑</Button>
                <Button type="danger" style={{marginRight:"5px",fontSize:"12px"}} size={ "small" }>删除</Button>
            </> ) }/>
        </Table>
    )
}
