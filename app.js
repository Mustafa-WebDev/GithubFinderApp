const profileCard = document.getElementById('profileCard');
        const avatar = document.getElementById('avatar');
        const nameField = document.getElementById('name');
        const usernameField = document.getElementById('username');
        const bioField = document.getElementById('bio');
        const reposField = document.getElementById('repos');
        const followersField = document.getElementById('followers');
        const followingField = document.getElementById('following');
        const locationField = document.getElementById('location');
        const blogField = document.getElementById('blog');
        const profileLinkField = document.getElementById('profileLink');

        const search = async () => {
            const userName = document.getElementById('myinp').value.trim();

            if (!userName) {
                alert("Please enter a GitHub username!");
                return;
            }

            try {
                const res = await fetch(`https://api.github.com/users/${userName}`);
                if (!res.ok) throw new Error("User not found!");

                const data = await res.json();

                // Update card with data
                avatar.src = data.avatar_url || '';
                nameField.textContent = data.name || "No Name Provided";
                usernameField.textContent = `@${data.login}`;
                bioField.textContent = data.bio || "This profile has no bio";
                reposField.textContent = data.public_repos;
                followersField.textContent = data.followers;
                followingField.textContent = data.following;
                locationField.textContent = data.location || "Not Available";
                blogField.textContent = data.blog || "Not Available";
                blogField.href = data.blog || "#";
                profileLinkField.href = data.html_url;

                profileCard.classList.remove('d-none');
            } catch (err) {
                console.error(err.message);
                alert(err.message);
            }
        };