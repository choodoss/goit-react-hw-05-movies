const URL = "https://api.themoviedb.org/3/";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzZiODFhZDI1YjU4ZDM4MDVhMzIwMDMwNmFiOTI3OCIsInN1YiI6IjY0MzZlYjk0YWVkZTU5MDBiNmMxYTAzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zIeaRszK30mloEyQVSdO5S4hPFf9bbWLE0idwZt7Z2g'
    }
};

const getDataFilm = async (param) => {
    return fetch(`${URL}${param}${param.includes('?') ? '&language=en-US' : '?language=en-US'}`, options)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            }
            return res.json()
        })
};

export default getDataFilm;

