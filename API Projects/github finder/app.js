// Init github class

const github = new GitHub;

// INIT UI CLASS

const ui = new UI;


// Search Input

const searchUser = document.getElementById('searchUser');


// Search Input event listener

searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;

    if (userText !== '') {
        // Make HTTP Call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    ui.showAlert('User not Found', 'alert alert-danger');
                } else {
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        ui.clearProfile();
    }
});