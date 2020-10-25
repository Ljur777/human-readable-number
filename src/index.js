module.exports = function toReadable (number) {
        var e001=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'] 
        var e010=['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
        var str
        var r,t
      //  var e100=["hundred"]
          
   // if (number % 100 === 0) {
   //    return Math.trunk(number/100)+'hundred'+e001[number]
     if (number <= 12) 
            return e001[number]
            else
      if (number % 10 === 0) 
      return e010[number/10-2]
       else {
         r = e010[number/10-2]
         t = e001[number[number.length]]
         return str=(r+' '+t)
       }
          }
  

