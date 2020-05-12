RESTFUL ROUTES- There are & RESTful routes

REST is just a pattern for defining our routes,way of mapping btw HTTP routes and CRUD 

#Edit/Update
* Add Edit Route
* Add Edit Form
* Add Update Route
* Add Update Form
* Add Method-Override


RESTful Routes:
Name	        Path	        HTTP Verb	           Purpose	                 Mongoose Method
Index	        /blogs	           GET	        List all blogs	                    Blog.find()
New         	/blogs/new         GET	        Show new blog form	                    N/A
Create      	/blogs	           POST	        Create a new blog, 
                                                then redirect somewhere	            Blog.create()
Show        	/blogs/:id         GET	        Show info about one specific blog	Blog.findById()
Edit        	/blogs/:id/edit	   GET	        Show edit form for one blog	        Blog.findById()
Update      	/blogs/:id	       PUT	        Update a particular blog,
                                                then redirect somewhere         	Blog.findByIdAndUpdate()
Destroy     	/blogs/:id	     DELETE	        Delete a particular blog, 
                                                then redirect somewhere	            Blog.findByIdAndRemove()
