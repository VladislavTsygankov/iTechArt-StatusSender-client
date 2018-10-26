let obj = {
    foo: 'foo',
    bar:'bar',
}

Object.values(obj).forEach(field => {return field = ''});

console.log(obj)