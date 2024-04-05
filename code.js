function permutationSort(a) {
    function sorted(arr) {
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }
    
    function swap(arr, i, j) {
        const x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    
    function permute(arr, leftInd) {
        var perms = 0;
        const l = leftInd + 1;
        if(arr.length <= l){
            return 1;
        }
        for (var i = leftInd; i < arr.length; i++) {
            if (arr[leftInd] != arr[i]){
                swap(arr, leftInd, i);
            }
            perms += permute(arr, l);
            if (sorted(arr)){
                return perms;
            }
            swap (arr, leftInd, i);
        }
        return perms;
    }
    return permute(a, 0);
}
