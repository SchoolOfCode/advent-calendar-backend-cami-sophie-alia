import {query} from '../db/index.js'

export default async function getPresentbyID(id){
const data = await query(`SELECT * FROM advent_calendar WHERE day =$1;` [id]);
return data.rows
}

