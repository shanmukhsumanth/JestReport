async.series([
    function(callback){
        http.get('url-1', function(res1){
            callback(null, res.data);
        })
    },
    function(callback){
        http.get('url-2', function(res2){
            callback(null, res.data);
        })
    },
    ...
], function(err, data){
    //data => [res1.data, res2.data, ...]
})
