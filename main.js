
       let data = 'data.json'
       
       // Fetch JSON data
        fetch(data) // Assuming data.json is in the same directory as this HTML file
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('JSON data:', data);
                // Process JSON data here
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
