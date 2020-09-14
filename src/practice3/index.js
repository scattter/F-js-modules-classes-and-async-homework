export function getPoetry() {
    return fetch("https://v1.jinrishici.com/all.json")
        .then((response) => {
            if (response.ok) {
                return Promise.resolve(response.json())
            }
            return Promise.reject(new Error(fail))
        })
        .then((data) => {
            var result = []
            result.push(data.origin)
            result.push(data.author)
            result.push(data.content)
            return result
        })
        .catch((err) => {
            console.log(err);
        })
}