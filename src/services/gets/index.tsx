let url = 'http://localhost:5000/api'

export function transactions(a: any) {
    return fetch(url + "/transactions?user_id=" + a , {
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