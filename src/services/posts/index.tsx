let url = 'http://localhost:5000/api'

export async function login(e: any, option: string) {
    return await fetch(url + "/user/" + option, {
        method: 'POST',
        body: JSON.stringify(e),
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    }).then(res => res.json()
    ).catch(error => {
        return "Wrong";
    })
}

export async function newTrans(e: any) {
    return await fetch(url + "/transactions/", {
        method: 'POST',
        body: JSON.stringify(e),
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    }).then(res => res.json()
    ).catch(error => {
        return "Wrong";
    })
}