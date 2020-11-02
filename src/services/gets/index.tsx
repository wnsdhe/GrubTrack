let url = 'http://localhost:5000/api'

export function transactions() {
    return fetch(url + "/transactions/", {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    }).then(res => res.json()
    ).catch(error => {
        return "Wrong";
    })
}

export function reports() {
    return fetch(url + "/reports/", {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    }).then(res => res.json()
    ).catch(error => {
        return "Wrong";
    })
}