    const input = document.querySelector("#inputArr");
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
    } 

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