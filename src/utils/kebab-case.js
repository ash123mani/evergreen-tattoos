const kebabCase = (string) => {
    if (!string) {
        throw new Error("String cannot be empty")
    }

    return string?.replace(/[^\w\s]/g, "")?.toLowerCase()?.split(" ")?.join("-")
}

module.exports = kebabCase
