function dft(x) {
    let X = [];
    const N = x.length;

    for (let k = 0; k < N; k++) {
        let re = 0;
        let im = 0;
        for (let n = 0; n < N; n++) {
            const constante = (TWO_PI * k * n) / N;
            re += x[n] * cos(constante);
            im -= x[n] * sin(constante);
        }

        re = re / N;
        im = im / N;
        let freq = k;
        let amp = sqrt(re*re + im*im);
        let fase = atan2(im, re);
        X[k] = { re, im, freq, amp, fase };
    }



    return X;
}