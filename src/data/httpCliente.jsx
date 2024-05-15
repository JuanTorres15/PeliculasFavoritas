const API ="https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGQwMWRjZmI5NTg3NDE4ZmY5ZDkxYzgxNjE2YzUzZSIsInN1YiI6IjY2M2ExN2EwODEzY2I2MDEyNzhhMzU0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YofP6-cpPQXcDv3BOpu85GuLR5WSlrDURWZGgvpiOkQ",
            "Content-Type": "application/json;charset=utf-8"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}