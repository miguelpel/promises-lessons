const endpoint = 'https://api.github.com/orgs/HackYourFuture/repos';
let repos = {};

// set up the page:
// create header, <div class="window"> infoWindow, <div class="window"> contributorsWindow.
// in header, add: 'HYF Repositories', then create select id='repos'.

// create and display placeholders.

// Fetch the repos:
// See the fetchJSON(url) function.

// The then and Catch of the fetch
// then: stock repos in repos, load repos in select button, then call the eventlistener for changing repos.
// catch: display error in console.

// load repos in select button.
// select = getElementbyId('repos')
// for repo in repos {
// repoOption = document.createElement option???
// option.innerHTML = repo.name
// select.appendChild(repoOption)
//}

// changingRepo(){
// repoOption = select.value
// infos = repos.repoOption
//}