async function main() {
    const results = await getData();
    const elem = await document.getElementById("result");
    await results.forEach(result => {
        let li = document.createElement('li');
        let text = document.createTextNode(result.full_name);
        li.appendChild(text);
        elem.appendChild(li);
    })
}

main()
