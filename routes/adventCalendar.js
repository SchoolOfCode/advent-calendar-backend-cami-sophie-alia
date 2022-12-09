import {router} from 'express';
const router = router(); 

import getPresentbyID from "../models/adventCalendar.js"

/**
 * router function for a get request. will call a helper function
 * that get an item by ID. 
 */
router.get("/", async function(req,res){
    const data = await getPresentbyID(req.params.id);
    res.json({success: true, payload: data})
})

export default router;



