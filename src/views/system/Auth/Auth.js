import {useEffect, useState} from "react";
import {Button, Table} from 'antd';
import {getRoles} from "@/api/system";

const {Column} = Table

function Auth(props) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [checkStrictly] = useState(false);
    // rowSelection objects indicates the need for row selection
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
        getRoles().then(res => {
            if(!ignore){
                setLoading(false)
                setData(res.data.data)
            }
        }).catch(e => setLoading(false))
        return function (){
            ignore = true;
        }
    }, [])
    return (
        <Table
            dataSource={data}
            loading={loading}
            style={{padding: "20px 0"}}
            rowKey={record => record.type_id}
            rowSelection={{...rowSelection, checkStrictly}}
        >
            <Column align={"center"} title={"权限id"} key={"type_id"} dataIndex={"type_id"}/>
            <Column align={"center"} title={"权限简称"} key={"type_id"} dataIndex={"name"}/>
            <Column align={"center"} title={"菜单id"} key={"type_id"} dataIndex={"menu_id"} render={menu_id => (
                <span>{menu_id.join(",")}</span>
            )}/>
            <Column align={"center"} title={"操作"} key={"type_id"} render={col => (<>
                <Button type="text" style={{marginRight: "5px", fontSize: "14px", color: "#2196F3"}}
                        size={"small"}>编辑</Button>
            </>)}/>
        </Table>
    )
}

export default Auth;
