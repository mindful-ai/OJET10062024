

define(['./square/square', './square/cube/cube'], function(square, cube) { 
    return { 
        add: function(a, b){ return square.sq(a) + cube.cu(b); } 
    };
    
})