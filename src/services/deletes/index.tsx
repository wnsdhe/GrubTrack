let url = 'http://localhost:5000/api'

export function DeleteTrans(transID: any) {
    return fetch(url + "/transactions/" + transID, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    }).then(res => res.json()
    ).catch(error => {
        return "Wrong";
    })
}