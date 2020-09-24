export default function getURL(address, port, path) {
    // TODO feedback: 推荐使用ES6的知识拼接字符串
    return address + ":" + port + path;
}

