
class MathNums {
  getTenFibonacciNumbers(){
    var nums = [1, 1]
    for(var i = 0; i < 8; i++){
      var sum = nums[nums.length-1] + nums[nums.length-2];
      nums.push(sum);
    }
    return nums;
  }
}

const mathNums = new MathNums;
var FibNums = mathNums.getTenFibonacciNumbers();
console.log(FibNums);