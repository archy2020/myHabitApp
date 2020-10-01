const Habit=require('../models/habit');

module.exports.create_habit=async function(req,res){
    try{
        await Habit.create({
                    name: req.body.name,
                    status: "Pending",
                    duration: req.body.duration,
                    date: req.body.date
                }, function(err, newHabit){
            
                    if(err){
                        console.log('error in creating new habit'); 
                        return;
                    }
                
               console.log("**********", newHabit);
               return res.redirect('back');
                });

        let detail=await Habit.find({});
        let habits=[];
        let tasks=[];
        for(let i=0;i<habits.length;i++){
        //let habit=await Detail.find({habit:habits[i]});
       
        // for(let d of detail){
        //     if(habits.indexOf(d.habit)==-1)
        //     habits.push(d.habit);
        // }

            let done=0,Notdone=0;
            let task={};
            for(let d of detail){
                if(habits[i]==d.habit&&d.status=="Done")
                done++;
                else if(habits[i]==d.habit&&d.status=="NotDone")
                Notdone++;
            }
            task.done=done;
            task.Notdone=Notdone;
            task.total=done+Notdone;
            tasks.push(task);
        }
        detail=await Habit.find({});
        return res.render('week',{title :"WeekView",detail:detail,habits:habits,tasks:tasks}); 
    }
    catch(err){console.log('Error', err);return; }
  
}

module.exports.delete_habit=async function(req,res){
    try{
          //let id = req.query.id;
         await Habit.findByIdAndDelete(req.query.id,function(err){
                if(err){console.log('error in deleting habbit');return;}
                return res.redirect('back');
            });
    }
    catch(err){console.log('Error', err);return; }  
}

module.exports.week=async function(req,res){
    try{
        
        await Habit.find({}, function(err,habits){
                if(err){
                    console.log('error in fetching data from db');
                    return;
                }
              
            return res.render('week', {
                title: "Week Plan",
                habit_list : habits });
        });
    }
    catch(err){console.log('Error', err);return; }  
}
  

//update habit(Done,Undone,None)
module.exports.update = async function(req, res){
    try{
        let find=await Habit.findOne({_id:req.params.id});
        let findupdate=await Habit.findOneAndUpdate({_id:req.params.id},{status:req.params.newstatus});
        
        return res.redirect('/');
       }
    catch(err){ console.log('Error', err);return;}    
}