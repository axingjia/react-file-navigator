This app is based solely on the "File System" theory in "Operating System" domain.

From "Modern Operating System" by Andrew Tanenbaum, page 265

Skip to Directory operation. There are create (create a directory), delete (delete a directory), opendir(open directory), closedir(close directory), readdir(return the next entry in an open directory), rename(rename directory), link(Skip), unlink(a directory entry is removed)

So I need to have create, delete, opendir,closedir,rename, 5 actions, 5 directory operation

So create is the create dir button at every level, create composes of appending a array in a position. If is at the second level, it needs to find the parent directory you are creating, and append an array to its array data structure, and finding is another art form, how to find an element in a k-ary tree; how to find is another question, when I click a button at the UI, it will register the element I am clicking

delete composes of deleting recursively,

Open composes of showing the child directories at the UI

Close composes of not showing the child element, actually, its recursive, if there are 4 levels, and I close at the 2nd, the 3 and the 4 will not show 

rename composes of finding the element, and changing the name is easy

So the hard part is finding, closing, and deleting