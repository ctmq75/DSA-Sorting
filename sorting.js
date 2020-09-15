import { _Node, LinkedList } from './LinkedList.js'
// 1. Understanding merge sort

// After 3 recursions = [21, 1] [26, 45], [29, 28], [2, 9], [16, 49], [39, 27], [43, 34], [46, 40]
//  After 16 recursions- 1, 2, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49
// First two: [1] and [21]
// 7th merge:  [ 2, 9, 28, 29 ] and [ 1, 21, 26, 45 ]

// 2. Understanding quicksort
/* 
1) False- pivot could be both since all other values can be sorted greatest or least.
2) True, pivot could be both since all other values can be sorted greatest or least, or below Pivot 17 or Pivot 14.
3) False, other values contain greater/lesser than values on either sides of them. 
4) False, same explaination as #2. 


*/

// 3. Implementing quicksort
function qSort(arr, start = 0, end = arr.length) {
    if (start >= end) {
        return arr;
    }

    const middle = partition(arr, start, end);
    array = qSort(arr, start, middle);
    array = qSort(arr, middle + 1, end);

    console.log(arr);
    return arr;
}

function partition(arr, start, end) {
    const pivot = arr[end - 1];
    let j = start;

    for (let i = start; i < end - 1; i++) {
        if (arr[i] <= pivot) {
            swap(arr, i, j);
            j++;
        }
    }

    swap(arr, end - 1, j);
    return j;
}

// 4. Implementing merge sort
function mSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mSort(left);
    right = mSort(right);

    return merge(left, right, array);
}

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }

    return array;
}

const data = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'.split(' ');
const dataSet = data.map(num => parseInt(num));
// 5. Sorting a linked list using merge sort

// 6. Bucket sort
function bucketSort(arr, min, max) {
    const buckets = Array((max - min) + 1).fill(0);

    let bucket; 

    for (let i = 0; i < arr.length; i++) {
        bucket = arr[i] - min;
        buckets[bucket] += 1;
    }

    const results = [];

    for (let i = 0; i < buckets.length; i++) {
        let total = buckets[i];
        let num = i + min;

        for (let j = 0; j < total; j++) {
            results.push(num);
        }
    }
    return results;
}

console.log(bucketSort([5, 19, 10, 20, 4, 7, 25, 30, 25, 6, 3, 2, 1], 1, 30));

// 7. Sort in place
function sortInPlace(arr) {
    let randomOrder; 

    for (let i = 0; i < arr.length; i++) {
        randomOrder = Math.floor(Math.random() * arr.length);
        swap(arr, i, randomOrder);
    }
    return arr;
}

console.log(sortInPlace([2,4,6,8,10,12,14]));
// 8. Sorting books
const titles = [
    "Jurassic Park",
    "Dog book",
    "Car book",
    "Cat book",
    "shark book",
    "book book"
];

titles.sort(function (a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
});

console.log('titles', titles)