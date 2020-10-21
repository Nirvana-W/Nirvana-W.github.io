//Notes: Temporary solution for now. Will probablly change to react later on.

const member = {"Annan Wang": "annan","Danny Tran": "danny","Vivian Cox": "vivian","Silvana Borgo": "silvana"};

getCommits();
getIssues();

function getCommits(){
	var apiUrl = 'https://gitlab.com/api/v4/projects/14580974/repository/commits?per_page=9999&all=true';
	var count = {};
	for (const key in member){
		count[key] = 0;
	}

	fetch(apiUrl)
	.then(res => res.json())
	.then((data) => {
	// Work with JSON data here
	console.log;
	for (const block of data){
		if(block["committer_name"] in member){
			count[block["committer_name"]] += 1;
		}
	}
	for (const key in member){
		document.getElementById(member[key] + "_commits").innerHTML = count[key];
	}
		document.getElementById('total_commits').innerHTML = data.length;
	})
}

function getIssues(){
	var apiUrl = 'https://gitlab.com/api/v4/projects/14580974/issues';
	var count = {};
	for (const key in member){
		count[key] = 0;
	}
	
	fetch(apiUrl)
	.then(res => res.json())
	.then((data) => {
	// Work with JSON data here
	console.log;
	for (const block of data){
		if(block["author"]["name"] in member){
			count[block["author"]["name"]] += 1;
		}
	}
	for (const key in member){
		document.getElementById(member[key] + "_issues").innerHTML = count[key];
	}
		document.getElementById('total_issues').innerHTML = data.length;
	})
}

