export function getPoetry() {
    return fetch("https://v1.jinrishici.com/all.json")
        .then((response) => {
          // TODO feedback：直接return response.json()就可以了
            if (response.ok) {
                return Promise.resolve(response.json())
            }
            return Promise.reject(new Error("fail"))
        })
        .then((data) => {
          // TODO feedback: 可以用ES6新特性解构result
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
