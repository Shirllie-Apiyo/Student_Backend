let mongoose = require("mongoose")

let schema = mongoose.Schema(
    {
        fname:{type:String, required:[true, 'First Name Required']},

        lname:{type:String, required:[true, 'Last Name Required']},

        email:{type:String, required:[true, 'Email Required'] },

        phone_no:{type:Number, required:[true, 'Phone Number Required']},

        join_date:{type:Date, required:[true, 'Date Required'] },

        student_id:{type:Number, required:[true, 'Id Required'] },
        
        course:{type:String, required:[true, 'Course Required'] },

        semester:{type:Number, required:[true, 'Semester Required']},

        gender:{type:String, required:[true,'Gender Required'] },

        dob:{type:Date, required:[true,'Date of Birth Required'] },

        study_mode:{type:String, required:[true, 'Study Mode Required'] },

        year_of_study:{type:Number,required:[true, 'Year of study Required'] },

        sch_fee:{type:Number,required:[true, 'School Fees Required']},

    }

)

module.exports = mongoose.model("Student", schema)