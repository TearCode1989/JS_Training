// repeat 함수 => 매개변수 n 과 f를 받아서 f로 들어온 함수를 반복 실행함

const repeat = (n, f) => {

    if (typeof f !== 'function') throw new TypeError('f 매개변수로 들어오는 것은 반드시 함수여야 해');

    for (var i = 0; i < n; i++) {
        f(i);
    }
}

try {
    repeat(2,1);
} catch (e) {
    console.log(e);
}