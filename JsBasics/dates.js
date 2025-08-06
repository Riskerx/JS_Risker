let mydate = new Date(2002,11,8)
console.log("1.", mydate.toString())
console.log("2",mydate.toDateString())
console.log("3",mydate.toTimeString())
console.log("4",mydate.toISOString())
console.log("5",mydate.toLocaleString())
console.log("6",mydate.toLocaleDateString())
console.log("7",mydate.toLocaleTimeString())
console.log("8",mydate.getFullYear())
console.log("9",mydate.getMonth())
console.log("10",mydate.getDate())
console.log("11",mydate.getDay())
console.log("12",mydate.getHours())
console.log("13",mydate.getMinutes())
console.log("14",mydate.getSeconds())
console.log("15",mydate.getMilliseconds())
console.log("16",mydate.getTime())
console.log("17",mydate.getTimezoneOffset())
console.log("18",mydate.getUTCFullYear())
console.log("19",mydate.getUTCMonth())
console.log("20",mydate.getUTCDate())
console.log("21",mydate.getUTCDay())
console.log("22",mydate.getUTCHours())
console.log("23",mydate.getUTCMinutes())
console.log("24",mydate.getUTCSeconds())

let mytimestamps = new Date()
mytimestamps.toLocaleString('default' ,{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
})
console.log(mytimestamps)
