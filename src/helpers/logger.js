const log = (body, routeName, fromPiq) => {
    const now = new Date().toUTCString();
    console.log(`${fromPiq ? "Received": "Responding to"} ${routeName} at: ${now}`, body);
}

module.exports = { log }