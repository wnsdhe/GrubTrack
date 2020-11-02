let url = 'http://localhost:5000/api'

export async function newTrans(e: any, id: any) {
    return await fetch(url + "/transactions/" + id, {
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