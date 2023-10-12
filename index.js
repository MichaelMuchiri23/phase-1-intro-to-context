// Your code here
function createEmployeeRecord(array){
    let obj={}
    obj.firstName=array[0]
    obj.familyName=array[1]
    obj.title=array[2]
    obj.payPerHour=array[3]
    obj.timeInEvents=[]
    obj.timeOutEvents=[]

    return obj
}

function createEmployeeRecords(arr){
    return(arr.map(element=>createEmployeeRecord(element)))
}

function createTimeInEvent(object,day){
    let newObj={}
    newObj.type='TimeIn'
    newObj.date=day.slice(0,10)
    newObj.hour=day.slice(11)*1
    object.timeInEvents[0]=newObj

    return object
}

function createTimeOutEvent(object,day){
    let newObj1={}
    newObj1.type='TimeOut'
    newObj1.date=day.slice(0,10)
    newObj1.hour=day.slice(11)*1
    object.timeOutEvents[0]=newObj1

    return object
}

function hoursWorkedOnDate(object,day){
    return (object.timeOutEvents[0].hour-object.timeInEvents[0].hour)/100
}

function wagesEarnedOnDate(object,day){
    return(hoursWorkedOnDate(object,day)*27)
}

function allWagesFor(object){
    const dates=object.timeOutEvents.date-object.timeInEvents.date
    return(wagesEarnedOnDate(dates))
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}