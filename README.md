# HabitApp

INSTALLATION

1)npm init
2)npm insatll express
3)npm install mongoose
4)npm install mongoose-dateonly
5)npm install ejs
6)npm install nodemon

Features of the app
        ● Add multiple habits to track like reading a book, going to the gym etc
        ● Track each habit everyday. These are the 3 statuses of a habit:
                ○ Done - Mark the habit as done for a day
                ○ Not done - Mark the habit as not done for a day
                ○ None - User did not take any action on a habit for a day
        ● A view to show all current habits. 
        ● A view to display 7 days of each habit

FOLDER STRUCTURE:

1.Assets:
     Includes static files:
        a)CSS
        b)JS
        c)Images
2. Config
     Connect to Mongodb.
        a)mongoose.js
3. Controllers
        a) Home:

         render to home page if user add a habit and
         if user open the web page on next a default behaviour
         is added in the form(Done,Undone,None).
        
        b) Users:

        1.Create:Create habit
        2.Find:find the habit and display on to the browser.
        3.Update:update habit(Done,Undone,None).
        4.Delete:delte habit.
4)Models:

        Schema of a table.
5)routes
        Request from browser to server controls through this folder.

6)views
        
        a) Home:

                Add a habit
                also we can delete a particular habit.

        b) Week:

                Display current date status and also 6 previous days of a week.
                It is dynamic if user open the app on next day days and date will be change.




