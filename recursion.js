function permitation(arr) {
    let result = [];
    if (arr.length === 1) return [arr];

    arr.forEach(letter => {
        let tmp = permitation(arr.filter(_l => _l !== letter));
        tmp = tmp.map(_set => [letter, ..._set]);
        result = [...result, ...tmp];
    });
    
    return result;
}

console.log(permitation(['a', 'b', 'c']));