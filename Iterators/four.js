const MyObject = {
    js: "javascript",
    cpp:"c plus plus",
    rb: "Ruby",
    sf: "swift",
};
for (const key in MyObject) {
    console.log(`${key} -> shortcut is for ${MyObject[key]}`);
}