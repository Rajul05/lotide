const raisin1 = ["🍫", "🍫", "🍇", "🍫"];
const raisin2 = ["🍫", "🍇", "🍫", "🍫", "🍇"];
const raisin3 = ["🍫", "🍫", "🍫"];
// Raisin alert!
// All good
  const  raisinAlarm = function (array, callback){
    if (callback){
      console.log("Raisin Alert!");
    }
    else{
      console.log("All Good");
        }
  }
  raisinAlarm(raisin1, raisin1.find(raisin => raisin === "🍇"));
  raisinAlarm(raisin2, raisin2.find(raisin => raisin === "🍇"));
  raisinAlarm(raisin3, raisin3.find(raisin => raisin === "🍇"));
  

const raisinsFilter = (arr) => {
	arr.find((fruit) => {
		if (fruit === '🍇') {
			console.log('Raisin alert!');
		} else {
			console.log('All good!');
		}
	});
};
//raisinsFilter(raisin1);
