 
 function arrayChallenge(arr){
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


