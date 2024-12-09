console.log('deep concentration'); // 1

makeMoney(); // 2

console.log('concentration_End'); // 3

// 코드는 1번 에서 3번 방향으로 순차적으로 실행되지만...
// 2번에서 참조 오류가 발생하면서 강제 종료가 된다.
// try-catch 문을 적절하게 사용하면 코드의 종료를 막고, 에러를 캐치해낼 수 있다.

