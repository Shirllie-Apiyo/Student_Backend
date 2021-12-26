// <!-- Node Js/Express JS -->
// <!-- search  -->
// <!-- CRUD -->
// <!-- Create mongodb called studentdb -->
// <!-- details collection insert(_id, names, course, join date) -->
// <!-- FROM Express create an API TO post/find/update/delete -->
// <!-- CAT: Tuesday -->
let { Router } = require("express")
let express = require("express")
let Student = require("./models/Student")

//create an express Router
let router = express.Router()

router.post("/addstudent", async(req, res)=>
{
    let post =new Student({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        phone_no: req.body.phone_no,
        join_date: req.body.join_date,
        student_id:req.body.student_id,
        course: req.body.course,
        semester: req.body.semester,
        gender: req.body.gender,
        dob: req.body.dob,
        study_mode: req.body.study_mode,
        year_of_study: req.body.year_of_study,
        sch_fee: req.body.sch_fee,

    })// end the post

    //save to mongo, after post you wait for a result

    try{
        let result  = await post.save()
        res.status(200).json({"msg":"Saved Successfully"})
    }

    catch(error){
        res.status(300).json({"msg":error.message})
    }
})// end route


router.get("/allstudents", function(req, res)
{
    Student.find(function(error, data)
    {
        if (error){
            res.status(300).json({"msg":error.message})
        }
        else{
            if(data.length ==0){
                res.status(200).json({"msg":"Not Found"})
            }
            else{
            res.status(200).json(data)
            }
        }
    });

});

router.get("/findbyfname", function(req, res)
{
    Student.find({fname:req.body.fname},
        function(error, data)
    {
        if (error){
            res.status(300).json({"msg":error.message})
        }
        else{
            if(data.length ==0){
                res.status(200).json({"msg":"Not Found"})
            }
            else{
            res.status(200).json(data)
            }
        }
    });

});

router.get("/findbycourse", function(req, res)
{
    Student.find({course:req.body.course},
        function(error, data)
    {
        if (error){
            res.status(300).json({"msg":error.message})
        }
        else{
            if(data.length ==0){
                res.status(200).json({"msg":"Not Found"})
            }
            else{
            res.status(200).json(data)
            }
        }
    });

});

router.route('/updatebystudentid').post( function(req, res)
{
    Student.findByIdAndUpdate({_id:req.body._id},{"fname":req.body.fname,"lname":req.body.lname},
        function(err, result)
    {
        if (err){
            res.send(err)
        }
        
        else{
        res.send({"msg":"updated!"})
        }
        
    })

});

router.route('/deletebyfname').post( function(req, res)
{
    Student.remove({fname:req.body.fname},
        function(err, result)
    {
        if (err){
            res.send(err)
        }
        
        else{
        res.send({"msg":"Removed!"})
        }
        
    })

});


module.exports = router