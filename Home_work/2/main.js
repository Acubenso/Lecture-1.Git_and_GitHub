        const input = document.querySelector("#inputArr");
        const button = document.querySelector("#buttonArr");
        const resultEl = document.querySelector(".resultArr");

        let arr, checkResult, facts, allCombinationArray;

        button.addEventListener("click", () => {
          arr = input.value.split("").map((el) => (el = parseInt(el)));
          allCombinationArray = [];
          checkResult = -1;
          facts = [];

          for (let i = 0; i < fact(arr.length); i++) {
            checkAllCombination(i, permutation(i, arr.slice(0)).join(""));
          }

          for (let i = 0; i < allCombinationArray.length; i++) {
            checkResult = arrayChallenge(allCombinationArray[i]);

            if (checkResult !== -1) {
              break;
            }
          }

          resultEl.innerHTML = "Result: " + checkResult;
        });

        function fact(N) {
          if (N == 0 || N == 1) return 1;

          if (facts[N]) return facts[N];

          facts[N] = N * fact(N - 1);

          return facts[N];
        }

        function permutation(index, A) {
          let n = A.length;
          let i = index + 1;
          let res = [];

          for (let t = 1; t <= n; t++) {
            let f = fact(n - t);
            let k = Math.floor((i + f - 1) / f);
            res.push(A.splice(k - 1, 1)[0]);
            i -= (k - 1) * f;
          }

          if (A.length) res.push(A[0]);

          return res;
        }

        function checkAllCombination() {
          let res = Array.prototype.slice.call(arguments);
          let item = res[1].split("").map((el) => {
            return parseInt(el);
          });
          allCombinationArray.push(item);
        }

        function arrayChallenge(arr) {
          let result;

          let leftSum = 0;
          for (let i = 0; i < arr.length / 2; i++) {
            leftSum += arr[i];
          }

          let rightSum = 0;
          for (let j = arr.length / 2; j < arr.length; j++) {
            rightSum += arr[j];
          }

          if (leftSum === rightSum) {
            result = arr;
          } else {
            result = -1;
          }

          return result;
        }
        




    /*const input = document.querySelector("#inputArr");
    const button = document.querySelector("#buttonArr");
    const resultEl = document.querySelector(".resultArr");

            
    button.addEventListener("click", () => {
        let arr = input.value.split("").map((el) => (el = parseInt(el)));

        resultEl.innerHTML = "Result is " + arrayChallenge(arr);
    }); 

    function arrayChallenge(arr){
        let result;
        let leftSum = 0;
        for(let i = 0; i < arr.length/2; i++){
            leftSum += arr[i];
        }

        let rightSum = 0;
        for(let j = arr.length/2; j < arr.length; j++){
            rightSum += arr[j];
        }

        if(leftSum === rightSum){
            result = arr;
        }else {
            result = -1;
        }
    return result;    
    }*/ 

///////////////////////////////////////////////////////////////////////////
/* function MergeSort(arr){
    if(arr.length > 1){
        let middlePoint = Math.floor(arr.length/2);
        let leftHalf = arr.slice(0, middlePoint);
        let rightHalf = arr.slice(middlePoint);

        arrayChallenge(leftHalf);
        arrayChallenge(rightHalf);

        let elLeft = 0;
        let elRight = 0;
        let elementOfNewArray = 0;

        while(elLeft < leftHalf.length && elRight < rightHalf.length){
            if(leftHalf[elLeft] < rightHalf[elRight]){
                arr[elementOfNewArray]= leftHalf[elLeft];
                elLeft++;
            }
            else{
                arr[elementOfNewArray] = rightHalf[elRight];
                elRight++;
            }
            elementOfNewArray++;
        }
        while(elLeft < leftHalf.length)
        {
            arr[elementOfNewArray] = leftHalf[elLeft];
            elLeft++;
            elementOfNewArray++;
        }
        while(elRight < rightHalf.length)
        {
            arr[elementOfNewArray] = rightHalf[elRight];
            elRight++;
            elementOfNewArray++;
        }
        
    }   
    return arr;
 }
*/