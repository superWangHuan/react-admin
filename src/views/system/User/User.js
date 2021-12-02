import {useEffect, useState} from "react";
import {getAllUser} from "@/api/system";
import {Table, Button} from 'antd';
import Avatar from "antd/es/avatar/avatar";

const {Column} = Table;
export default function User() {
    const [checkStrictly] = useState(false);
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelect: (record, selected, selectedRows) => {
            console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
        },
    };
    useEffect(() => {
        let ignore = false;
        getAllUser().then(res => {
            if(!ignore){
                setData(res.data.data)
                setLoading(false)
            }
        }).catch(e => {
            setLoading(false)
        })
        return function (){
            ignore = true;
        }
    }, [])
    return (
        <Table
            dataSource={data}
            loading={loading}
            style={{padding: "20px 0"}}
            rowKey={record => record.id}
            rowSelection={{...rowSelection, checkStrictly}}
        >
            <Column align={"center"} title={"id"} key={"id"} dataIndex={"id"}/>
            <Column align={"center"} title={"头像"} key={"id"} dataIndex={"avatar"} render={avatar => (
                <Avatar shape="square" size={64} src={avatar}/>
            )}/>
            <Column align={"center"} title={"账号"} key={"id"} dataIndex={"username"}/>
            <Column align={"center"} title={"密码"} key={"id"} dataIndex={"password"}/>
            <Column align={"center"} title={"权限"} key={"id"} dataIndex={"roles"} render={roles => (
                <span>{roles.name}</span>
            )}/>
            <Column align={"center"} title={"操作"} key={"id"} render={col => (<>
                <Button type="primary" style={{marginRight: "5px", fontSize: "12px"}} size={"small"}>编辑</Button>
                <Button type="danger" style={{marginRight: "5px", fontSize: "12px"}} size={"small"}>删除</Button>
            </>)}/>
        </Table>
    )
}
