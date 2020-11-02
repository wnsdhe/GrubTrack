let url = 'http://localhost:5000/api'

export async function EditTrans(e: any, id:any, userid: any) {
    return await fetch(url + "/transactions/" + id + "?user_id=" + userid, {
        method: 'PUT',
        body: JSON.stringify(e),
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    }).then(res => res.json()
    ).catch(error => {
        return "Wrong";
    })
}