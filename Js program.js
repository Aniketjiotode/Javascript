var totalhr = 0;
var wage=80
totalhr=GetTotalHr()
console.log(`Total monthly wage = ${totalhr*wage}`)

function GetTotalHr() {
    var result = 0
    var i = 0
    while (i <= 30) {
        i++;
        var random = Math.floor(Math.random() * 3)
        switch (random) {
            case 0:
                result += 0;
                break;
            case 1:
                result += 8;
                break;
            case 2:
                result += 4;
                break;
            default:
                result = -1;
                break;
        }
    }
    return result;
}

