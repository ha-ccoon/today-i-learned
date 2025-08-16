# JavaScript

## Execution Context & Scope

> Q1. `var`, `let`, `const`의 스코프 차이를 설명하세요.

- `var` 는 함수 스코프를 가지고, let과 const는 블록 스코프를 가집니다.


> Q2. 호이스팅(Hoisting)이란 무엇이며, 함수 선언문과 함수 표현식에서 어떻게 동작이 다른지 설명하세요.


호이스팅은 자바스크립트 엔진이 실행 컨텍스트를 생성할 때, 변수와 함수 선언을 코드 실행 전에 메모리에 먼저 등록하는 동작을 말합니다. 


함수 선언문의 경우, 실행 컨텍스트 실행시 함수 전체가 호이스팅 되기 때문에 어디에서 함수를 호출하든 실행이 가능하고, 함수 표현식의 경우 선언한 변수에 대해서만 호이스팅 되고, 할당은 런타임에서 수행되기 때문에 함수 호출 이후에만 함수 실행이 가능합니다. (`TypeError 발생`)

- 함수 선언문 (Function Declaration): `function` 키워드로 함수 선언
- 함수 표현식 (Function Expression): 함수를 변수에 할당하는 방식


> Q3. 실행 컨텍스트의 생성 단계(Creation Phase)와 실행 단계(Execution Phase)에서 일어나는 일을 간단히 설명하세요.

실행 컨텍스트는 자바스크립트 코드가 실행되는 환경을 의미합니다.

**생성 단계(Creation Phase)** 에서는 변수, 함수 선언이 메모리에 등록됩니다. var는 undefined로 초기화 되고, let/const는 TDZ 구간에 존재하게 됩니다. 또한 스코프 체인과 this가 결정됩니다. 
**실행 단계(Execution Phase)** 에서는 코드가 실제로 한 줄씩 실행되며 변수에 값이 할당되고, 함수 호출 시 새로운 실행 컨텍스트가 스택에 쌓여 실행됩니다.

> Q3-1. TDZ (Temporal Dead Zone) 은 무엇인가요?
- TDZ는 변수가 선언되고, 초기화 되기 전의 구간으로 이 구간에서 해당 변수를 호출하면 할당된 기본값이 없어 `ReferenceError`가 발생합니다.
- var는 선언과 동시에 초기화 되지만, let 과 const는 코드 실행시에 초기화 됩니다.

> Q4. 아래 코드 실행 결과와 그 이유를 설명하세요. <br>
> 힌트: 변수 선언 방식에 따른 TDZ(Temporal Dead Zone) 개념

콘솔 출력 결과는 undefind 와 `ReferenceError`가 출력됩니다.

첫번째는, var로 변수를 선언했고, var는 선언시 바로 undefined로 초기화 됩니다.
두번째는, let으로 변수를 선언했고, let은 코드 실행시에 초기화 되기 때문에 현재 console.log의 위치에서 변수를 호출하면 TDZ 구간에 위치하여 `ReferenceError`를 반환합니다.

```js
function test() {
  console.log(a);
  var a = 10;

  console.log(b);
  let b = 20;
}

test();
```

> Q5. 아래 코드에서 콘솔에 출력되는 값과, 실행 컨텍스트와 스코프 체인 관점에서 그 이유를 설명하세요.

- 콘솔 출력 결과는 `2` 가 출력됩니다.
- 전역 컨텍스트 실행
  - 가장 먼저 `var x = 1` 이 전역 환경에 저장됩니다.
- outer 함수 호출시 -> 함수 컨텍스트 생성
  - outer의 렉시컬 환경에서 `x = 2`가 바인딩됩니다.
  - 내부 inner 함수가 정의될 때, inner는 자신의 `environment`에 함수 정의 시점의 외부 렉시컬 환경을 캡쳐합니다. -> 렉시컬 스코프
- return inner -> 클로저
  - outer 함수는 종료되지만 fn 변수가 inner를 참조하고 있으므로 outer의 렉시컬 환경은 가비지 컬렉션 대상에서 제외되어 유지됩니다.
- 결론적으로
  - fn 호출 -> outer 호출 -> inner 호출
  - `console.log()` 식별자 탐색 진행
    - inner 함수의 환경 탐색 (없음) -> outer 함수 환경 탐색 (있음) -> 전역까지 가지 않음


```js
var x = 1;

function outer() {
  var x = 2;

  function inner() {
    console.log(x);
  }

  return inner;
}

const fn = outer();
fn();
```


> Q6. ERP 시스템에서 아래와 같이 API 호출 후 비동기 처리 결과를 참조하는 코드가 있습니다. <br> 아래 코드의 문제점과 수정 방법을 설명하세요.



```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(`API call ${i}`);
  }, 1000);
}
```


> Q7. 클로저를 활용하여, 특정 값이 외부에서 변경되지 않도록 하는 함수를 작성하세요. <br>
> 예: 토큰 값을 설정하고 가져올 수 있지만, 외부에서 직접 변경은 불가능하게.

> Q8. 실무에서 this 바인딩 문제와 스코프 혼동으로 인해 예상치 못한 값이 출력된 경험이 있다면, 어떻게 디버깅했는지 설명해 주세요. <br>
> 없다면, 어떻게 접근할지 가상의 시나리오를 들어 답변해 보세요.