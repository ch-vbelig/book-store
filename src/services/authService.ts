async function register(id: string, email: string, username: string, roles: string[]) {
    // const formData = new FormData()
    // formData.append('data', JSON.stringify({ email, username, roles }))
    // formData.append('file', '')
    // console.log(formData.get('data'))
    // const response = await fetch(`${URLS.API_URL}/user/${id}`, {
    //     method: 'PATCH',
    //     body: formData,
    // })
    // const data = await response.json()
    // if (response.ok) {
    //     return data
    // } else {
    //     return Promise.reject(new Error('Profile data handle error: ' + (data.errors?.map((e: Error) => e.message).join('\n') ?? 'unknown')))
    // }
}

export { register }