// Step 1: Initialize the async function
async function fetchUserData() {

    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the data container
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 5: Clear the loading message
        dataContainer.innerHTML = '';

        // Step 6: Create and append user list
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 7: Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Step 8: Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);