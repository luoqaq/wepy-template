import wepy from 'wepy';
import tip from '@/utils/tip'

/**
 * 
 * @param {请求参数}} arg：{query:{key: value, ...}, method: 'POST...'}
 * @param {请求url} url 
 */
const wxRequest = async (arg = {}, url) => {
    tip.loading()

    let param = arg.query || {}

    let res = await wepy.request({
        url: url,
        method: arg.method || 'GET',
        header: {'Content-Type': 'application/json'},
    });
    
    tip.loaded()

    return res
}

export default wxRequest