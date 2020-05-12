RESTFUL ROUTES- There are 7 RESTful routes

REST is just a pattern for defining our routes,way of mapping btw HTTP routes and CRUD 


RESTful Routes:
Name	        Path	        HTTP Verb	           Purpose	                 Mongoose Method
______________________________________________________________________________________________________________
Index    |     /blogs	      |   GET	   |     List all blogs	                        | Blog.find()
________________________________________________________________________________________________________________
New      |  	/blogs/new     |   GET	   |     Show new blog form	               |    N/A
________________________________________________________________________________________________________________
Create   |   	/blogs	      |   POST	   |     Create a new blog,then redirect somewhere |  Blog.create()
__________________________________________________________________________________________________________________         
Show     |   	/blogs/:id     |   GET	   |     Show info about one specific blog         |  Blog.findById()
__________________________________________________________________________________________________________________
Edit     |   /blogs/:id/edit     |	 GET	   |     Show edit form for one blog	      |  Blog.findById()
_____________________________________________________________________________________________________________________
Update   |   	/blogs/:id     |   PUT	   |Update a particular blog,then redirect somewhere|	Blog.findByIdAndUpdate()
_____________________________________________________________________________________________________________________________
Destroy  |   	/blogs/:id     |  DELETE |  Delete a particular blog,then redirect somewhere    |  Blog.findByIdAndRemove()
