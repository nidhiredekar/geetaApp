const express = require('express')
const fetchusers = require('../middleware/fetchusers')
const Shloka = require('../models/Shlokas')
const router = express.Router()
const { body, validationResult } = require('express-validator')



//ROUTE 1 TO GET ALL THE FAV SHLOKAS OF LOGGED IN USER
router.get('/fetchallshlokas', fetchusers, async (req, res) => {
    try {
        const shlokas = await Shloka.find({ user: req.user.id });
        res.json(shlokas)
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error")
    }
})


//ROUTE 2 TO ADD A NEW SHLOKA TO FAV LIST
router.post('/addshlokas', fetchusers, [
            body('shloka_id').exists(),
            body('text').exists(),
            body('tranlation').exists(),

        ],async (req, res) => {
            try {
                const {shloka_id, text, translation} = req.body;
                const shloka = new Shloka({
                    shloka_id, text, translation, user: req.user.id
                })
                const favShlok = await shloka.save()
                res.json(favShlok)
            } catch (err) {
                console.error(err);
                res.status(500).send("Internal Server Error")
            }

})





//ROUTE 3 TO DELETE ANY SHOLKA FROM FAV LIST 

router.delete('/deleteshloka/:id', fetchusers,async (req, res) => {
  
        // const {shloka_id, text, translation} = req.body;
        
        try{
            //Find the Shloka to be deleted
        let shloka = await Shloka.findById(req.params.id);
        if(!shloka){
            return res.status(404).send("No Shloka found")
        }

        if(shloka.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed");
        }

        shloka = await Shloka.findByIdAndDelete(req.params.id)
        res.json({status : "success"})

        }catch (err) {
            console.error(err);
            res.status(500).send("Internal Server Error")
        }


})




module.exports = router