function permutationSort(arr) {
    function sorted(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
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

    var perms = 0;
    function permute(arr, leftInd) {
        if (leftInd === arr.length - 1) {
            perms++;
            if (sorted(arr)) {
                return;
            }
        }

        for (let i = leftInd; i < arr.length; i++) {
            swap(arr, leftInd, i);
            permute(arr, leftInd + 1);
            swap(arr, leftInd, i);
        }
    }

    permute(arr, 0);
    return perms;
}
