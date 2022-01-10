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
                setData(res.data)
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
            rowKey={record => record.uid}
            rowSelection={{...rowSelection, checkStrictly}}
        >
            <Column align={"center"} title={"id"} key={"uid"} dataIndex={"uid"}/>
            <Column align={"center"} title={"头像"} key={"uid"} dataIndex={"avatar"} render={avatar => (
                <Avatar shape="square" size={64} src={avatar}/>
            )}/>
            <Column align={"center"} title={"账号"} key={"uid"} dataIndex={"username"}/>
            <Column align={"center"} title={"手机号"} key={"uid"} dataIndex={"phone"}/>
            <Column align={"center"} title={"手机号"} key={"uid"} dataIndex={"email"}/>
            <Column align={"center"} title={"角色id"} key={"uid"} dataIndex={"roles"}/>
            <Column align={"center"} title={"是否禁用"} key={"uid"} dataIndex={"enabled"} render={enabled => (
                <span>{enabled===0?"禁用":"启用"}</span>
            )}/>
            <Column align={"center"} title={"头像"} key={"uid"} dataIndex={"sex"} render={sex => (
                <span>{sex===0?"女":"男"}</span>
            )}/>
            <Column align={"center"} title={"创建时间"} key={"uid"} dataIndex={"createTime"}/>
            <Column align={"center"} title={"操作"} key={"id"} render={col => (<>
                <Button type="primary" style={{marginRight: "5px", fontSize: "12px"}} size={"small"}>编辑</Button>
                <Button type="danger" style={{marginRight: "5px", fontSize: "12px"}} size={"small"}>删除</Button>
            </>)}/>
        </Table>
    )
}
