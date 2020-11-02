let url = 'http://localhost:5000/api'

export function DeleteTrans(userid: any, transID: any) {
    return fetch(url + "/transactions/" + transID + "?user_id=" + userid, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    }).then(res => res.json()
    ).catch(error => {
        return "Wrong";
    })
}