import { get } from '../../../../services/http'
export function getDetail(id) {
    return get(`/signs/${id}`)
}