function range(start, end, step) {
    var array = [];
    if (step == null) {
        for (start; start <= end; start++) {
            array.push(start);
        }
    } else {
        if (start > end) {
            for (start; start >= end; start += step) {
                array.push(start);
            }
        } else if (start < end) {
            for (start; start <= end; start += step) {
                array.push(start);
            }
        }
        
    }
    return array;
}

function sum(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));