function todoList () {
	var username = document.getElementById('username')
	var comment = document.getElementById('comment')

	var createdUsername = document.createTextNode('Nome: ' + username.value) // value is stored in the comment section instead of in textbox
	var createdComment = document.createTextNode('Comentário: ' + comment.value)

	// Create element
	var listItem = document.createElement('LI') 
	listItem.className = "list-group-item"

	// Create Date
	var todaysDate = document.createElement('p') 
	todaysDate.setAttribute('id', 'theDate')
	var today = new Date()
	var theDate = today.toDateString()
	var createDate = document.createTextNode(theDate)
	todaysDate.appendChild(createDate)
	listItem.appendChild(todaysDate)


	// Create Username and Comment
	var newUsername2 = document.createElement("H3")
	newUsername2.appendChild(createdUsername)
	var newComment2 = document.createElement("P")
	newComment2.appendChild(createdComment)
	listItem.setAttribute('id', 'aList' )
	listItem.appendChild(newUsername2)
	listItem.appendChild(newComment2)

	// Create Button
	var removeButton = document.createElement('button')
	removeButton.setAttribute("class", "btn btn-danger btn-sm")
	removeButton.setAttribute("onclick", "deleteButton(this);")
	removeButton.innerHTML = ('Remover')
	listItem.appendChild(removeButton)

	document.getElementById('commentList').appendChild(listItem) // Display <li>


	username.value=''
	comment.value='' 
	username.focus() 
	comment.focus()
	username.focus()
}


function deleteButton (item) {
		var remove = item.parentNode
		remove.parentNode.removeChild(remove)
	}