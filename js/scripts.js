// JavaScript Document

//Get API		
fetchResults('https://www.reddit.com/r/all/top/.json');

// Get Json
async function fetchResults(url) {
  fetch(url).then(function(response) {
    document.querySelector('.Lcontent').innerHTML = 'Fetching results';
	document.querySelector('.Rcontent').innerHTML = 'test';
    return response.json();
  })
  .then(function(myJson) {
    
    renderResults(myJson);
    
  });
}
// Render HTML
function renderResults(json) {
  posts = json.data.children;
	console.log(posts);
testArrey = posts[0];
	console.log(testArrey);

	
  html = `<ol>
    ${posts.map( post => 
	  `<li>	
				<h2>${post.data.title}</h2>
				<p><a href=${post.data.url} target='_blank'><img src="${post.data.thumbnail}"></a></p>
				<p>Author: <small>${post.data.author}</small></p>
				<p>Comments: <small>${post.data.num_comments}</small></p>
				<p>Unread status: <small>${post.data.visited}</small></p>
				<p>Date: <small>${post.data.created_utc}</small></p>
				<p><small><a href=${post.data.url} target='_blank'>Visit Link</a></small></p>
				<p>Index: <small>${post.data.id}</small></p>
				<button onclick="splice(0)">Dismiss</button>
				<button onclick="select(0)">Select</button>
				
			</li>`
    ).join('')}
  </ol>`;
   html2 = ``;
  
  document.querySelector('.Lcontent').innerHTML = html;
  document.querySelector('.Rcontent').innerHTML = html2;
    
}
function renderResults2(pArray) {
  posts = pArray;
	console.log(posts);
testArrey = posts[0];
	console.log(testArrey);

	
  html = `<ol>
    ${posts.map( post => 
	  `<li>	
				<h2>${post.data.title}</h2>
				<p><a href=${post.data.url} target='_blank'><img src="${post.data.thumbnail}"></a></p>
				<p>Author: <small>${post.data.author}</small></p>
				<p>Comments: <small>${post.data.num_comments}</small></p>
				<p>Unread status: <small>${post.data.visited}</small></p>
				<p>Date: <small>${post.data.created_utc}</small></p>
				<p><small><a href=${post.data.url} target='_blank'>Visit Link</a></small></p>
				<p>Index: <small>${post.data.id}</small></p>
				<button onclick="splice(0)">Dismiss</button>
				<button onclick="select(0)">Select</button>
				
			</li>`
    ).join('')}
  </ol>`;
   html2 = ``;
  
  document.querySelector('.Lcontent').innerHTML = html;
  document.querySelector('.Rcontent').innerHTML = html2;
    
}
function splice(p){
	console.log(p);
	var newJason = posts.splice(0, 1)
	console.log(posts);
	console.log(newJason.length);
	console.log(newJason);
	renderResults2(posts);	
}
function select(p){
	var index = p;
	var postSelected = posts[p]
	console.log(postSelected);
	
	renderSelected(postSelected);	
}
function renderSelected(p){
	var selected = p;
	console.log(selected.data.thumbnail);
	pTitle = selected.data.title;
	pAuthor = selected.data.author;
	pThumbnail = selected.data.thumbnail;
	pComments = selected.data.num_comments;
	pVisited = selected.data.visited;
	pDate = selected.data.created_utc;
	pLink = selected.data.url;
	document.querySelector('.Rcontent').innerHTML ="<img src=\"pThumbnail\" width=\"200px\" height=\"200px\">" + "<br />" + "Title: " + pTitle + "<br />" + "Author: " + pAuthor + "<br />" + "Comments: " + pComments + "<br />" + "Unread status: " + pVisited + "<br />" + "Date: " + pDate + "<br />" + "<a href=\"pLink\">Visit Link</a>  ";
	
}


