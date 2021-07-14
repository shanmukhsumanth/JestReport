const async = require('async');
async.map(
    [1,2,3],
    function(val, callback){
        // loop callbacks
        setTimeout(function(){
            callback(null, val * val);
        }, 1000);
    }, function(err, Tarr){
        // final callback
    }
)
