document.addEventListener('DOMContentLoaded', function() {
    const nomeElement = document.querySelector('#name')
    const avatarElement = document.querySelector('#avatar')
    const usernameElement = document.querySelector('#username')
    const reposElement = document.querySelector('#repos')
    const followersElemnt = document.querySelector('#followers')
    const followingElement = document.querySelector('#following')
    const linkElement = document.querySelector('#link')


    fetch('https://api.github.com/users/francisco-ce')
        .then(function(res){
            return res.json();
        })

        .then(function(resJson){
            nomeElement.innerText = resJson.name
            usernameElement.innerText = resJson.login
            avatarElement.src = resJson.avatar_url
            reposElement.innerText = resJson.public_repos
            followersElemnt.innerText = resJson.followers
            followingElement.innerText = resJson.following
            linkElement.href = resJson.html_url
        })
        .catch(function(error) {
            nomeElement.innerText = 'Default'
            usernameElement.innerText = 'Default'
            avatarElement.src = 'https://via.placeholder.com/180x180'
            reposElement.innerText = 'N/A'
            followersElemnt.innerText = 'N/A'
            followingElement.innerText = 'N/A'
            linkElement.href = '#'
        })
    .catch(function(error) {
        alert('An error occurred:', error)
    })

})