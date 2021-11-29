/**
 * (success:1000) (err:3000) (auth:2000)
 *
 */
const codes = {
    success:1000,
    auth:2000,
    error:3000,
}

const handCode = {
    success(data=null){
        return {
            code:codes.success,
            data
        }
    },
    error(msg){
        return {
            code:codes.error,
            msg
        }
    }
}
export default handCode
