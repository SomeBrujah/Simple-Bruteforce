function perm(arr) {
    console.log(arr);
    const N = arr.length;
    const p = arr.map( (_, i)=> i );
    let i = 1;

    while(i < N) {
        p[i]--;

        j = i % 2 * p[i];
        [arr[j], arr[i]] = [arr[i], arr[j]];

        console.log(arr);

        i = 1;
        while(p[i] == 0) {
            p[i] = i;
            i += 1;
        }
    }
}

perm([0, 1, 2]);