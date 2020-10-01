//const db = require('./config/mongoose');
const Habit=require('../models/habit');

module.exports.home = async function(req, res){
    try{
        Habit.find({}, function(err,habits){
                  if(err){
                      console.log('error in fetching data from db');
                      return;
                  }
                
                  return res.render('home',{
                    title : "Habit Tracker",
                    habit_list : habits
                 
                  });
              });
      }
   catch(err){ console.log('error in fetching data from db', err);return;}
}
