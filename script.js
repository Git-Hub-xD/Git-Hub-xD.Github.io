document.addEventListener("DOMContentLoaded", function () {
    const username = "Git-Hub-xD"; // Replace with your GitHub username
    const profileUrl = `https://api.github.com/users/${username}`;
    const reposUrl = `https://api.github.com/users/${username}/repos`;

    // Fetch profile information
    fetch(profileUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("avatar").src = data.avatar_url;
            document.getElementById("username").innerText = data.login;
            document.getElementById("bio").innerText = data.bio || "No bio available.";
        })
        .catch(error => console.error("Error fetching profile:", error));

    // Fetch repositories
    fetch(reposUrl)
        .then(response => response.json())
        .then(data => {
            const repoList = document.getElementById("repo-list");
            data.forEach(repo => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.href = repo.html_url;
                a.target = "_blank";
                a.innerText = repo.name;
                li.appendChild(a);
                repoList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching repositories:", error));
});
