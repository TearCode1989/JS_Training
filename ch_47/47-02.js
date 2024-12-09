console.log("concentration_Start");

try {
    makeMoney();
} catch (e) {
    console.error("에러는 여기서 캐치가 가능", e);
}

console.log("concentration_End");