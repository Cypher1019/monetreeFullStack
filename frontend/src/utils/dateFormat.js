import moment from 'mont'


export const dateFormat = (date) =>{
    return moment(date).format('DD/MM/YYYY')
}